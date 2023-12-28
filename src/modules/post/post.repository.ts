import { Injectable } from "@nestjs/common";
import { Post } from "./entities/post.entity";
import { DataSource, Repository } from "typeorm";
import { UserSearch } from "../user-search/entities/user-search.entity";

interface PostEntity extends Post {
    userSearch: UserSearch
}

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private readonly dataSource: DataSource) {
        super(Post, dataSource.createEntityManager());
    }

    async createEntity(filteredPosts: Post[], userSearch: UserSearch): Promise<Post[]> {
        try {
            const entity = filteredPosts.map((item: PostEntity) => {
                const dto = {
                    userId: item.userId,
                    externalId: Number(item.id),
                    title: item.title,
                    body: item.body,
                    userSearch: userSearch
                };
                return this.create(dto);
            });
            await this.save(entity);
            return entity;
        } catch (error) {
            console.log(error);
        }
    }
}