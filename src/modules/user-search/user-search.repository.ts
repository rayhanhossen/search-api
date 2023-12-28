import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { UserSearch } from "./entities/user-search.entity";
import { CreateUserSearchDto } from "./dto/create-user-search.dto";

@Injectable()
export class UserSearchRepository extends Repository<UserSearch> {
    constructor(private readonly dataSource: DataSource) {
        super(UserSearch, dataSource.createEntityManager());
    }

    async createEntity(dto: CreateUserSearchDto): Promise<UserSearch> {
        try {
            const entity = this.create(dto);
            await this.dataSource.transaction(async (transactionEntityManager) => {
                try {
                    await transactionEntityManager.save(entity); 
                } catch (error) {
                    console.error("Error saving user-search entities within transaction:", error);
                    throw error;
                }
            });
            return entity;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create user-search entities');
        }
    }

    async exitsCheck(keyword: string): Promise<UserSearch> {
        try {
            return this.findOne({
                where: { keyword },
            })
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch user-search entities');
        }
    }
}