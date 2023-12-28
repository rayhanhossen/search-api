import { Injectable } from "@nestjs/common";
import { Post } from "./entities/post.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private readonly dataSource: DataSource) {
        super(Post, dataSource.createEntityManager());
    }

    async createEntity(filteredPosts: any, userSearch: any): Promise<Post[] | Error> {
        try {
            const entity = filteredPosts.map((item: any) => {
                const dto = {
                    userId: item.userId,
                    externalId: item.id,
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