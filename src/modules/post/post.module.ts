import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostRepository } from './post.repository';
import { UserSearchRepository } from '../user-search/user-search.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Post,
        ])
    ],
    controllers: [PostController],
    providers: [
        PostService,
        PostRepository,
        UserSearchRepository
    ],
})
export class PostModule { }
