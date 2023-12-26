import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserSearch } from "./entities/user-search.entity";

@Injectable()
export class PostRepository extends Repository<UserSearch> {
    constructor(private readonly dataSource: DataSource) {
        super(UserSearch, dataSource.createEntityManager());
    }
}