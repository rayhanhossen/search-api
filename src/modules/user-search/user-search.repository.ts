import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserSearch } from "./entities/user-search.entity";
import { CreateUserSearchDto } from "./dto/create-user-search.dto";

@Injectable()
export class PostRepository extends Repository<UserSearch> {
    constructor(private readonly dataSource: DataSource) {
        super(UserSearch, dataSource.createEntityManager());
    }

    async createEntity(dto: CreateUserSearchDto): Promise<UserSearch | Error> {
        try {
            const entity = this.create(dto);
            await this.save(entity);
            return entity;
        } catch (error) {
            console.error(error);
        }
    }
}