import { Injectable } from "@nestjs/common";
import { Post } from "./entities/post.entity";
import { DataSource, Repository, Transaction } from "typeorm";
import { UserSearch } from "../user-search/entities/user-search.entity";

interface PostEntity extends Post {
    userSearch: UserSearch
}

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private readonly dataSource: DataSource) {
        super(Post, dataSource.createEntityManager());
    }

    async createEntity(filteredPosts: Post[], userSearch: UserSearch, userIp: string): Promise<Post[]> {
        try {
            const entity = filteredPosts.map((item: PostEntity) => {
                const dto = {
                    userId: item.userId,
                    externalId: Number(item.id),
                    title: item.title,
                    body: item.body,
                    userIp: userIp,
                    userSearch: userSearch
                };
                return this.create(dto);
            });
            await this.dataSource.transaction(async (transactionEntityManager) => {
                try {
                    await transactionEntityManager.save(entity); 
                } catch (error) {
                    console.error("Error saving post entities within transaction:", error);
                    throw error;
                }
            });
            return entity;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to create post entities');
        }
    }
}