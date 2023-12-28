import { Module } from '@nestjs/common';
import { UserSearchService } from './user-search.service';
import { UserSearchController } from './user-search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSearch } from './entities/user-search.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserSearch
        ])
    ],
    controllers: [UserSearchController],
    providers: [UserSearchService],
})
export class UserSearchModule { }
