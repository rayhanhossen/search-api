import { Injectable } from "@nestjs/common";
import { Post } from "./entities/post.entity";
import { DataSource, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private readonly dataSource: DataSource) {
        super(Post, dataSource.createEntityManager());
    }
}