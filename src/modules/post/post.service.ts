import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import axios from 'axios';
import { PostRepository } from './post.repository';
import { UserSearchRepository } from '../user-search/user-search.repository';
import { CreateUserSearchDto } from '../user-search/dto/create-user-search.dto';

@Injectable()
export class PostService {
    constructor(
        private readonly postRepo: PostRepository,
        private readonly userSearchRepo: UserSearchRepository
    ) { }
    async searchPost(keyword: string): Promise<Post[] | Error> {
        try {
            // Fetch external API data
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            if (response.status !== 200) return new Error("Failed to fetch data");
            const postData = response.data;

            // Filter posts based on the keyword
            const filteredPosts = postData
                .filter((item: Post) => item.title.includes(keyword) || item.body.includes(keyword));

            // check filterPosts empty or not 
            if (filteredPosts.length !== 0) {
                // check userSearch is already exits or not 
                const existingUserSearch = await this.userSearchRepo.exitsCheck(keyword);
                let userSearch: any;
                if (!existingUserSearch) {
                    //  Create entity of userSearch and save keyword in database
                    userSearch = await this.userSearchRepo.createEntity({ keyword } as CreateUserSearchDto);
                } else userSearch = existingUserSearch;

                // Create post entity based on filterPosts and save in DB 
                const savedPost = await this.postRepo.createEntity(filteredPosts, userSearch);

                // Save asssosiated post with the user search 
                userSearch.posts = savedPost;
                await this.userSearchRepo.save(userSearch);
                return savedPost;
            } else {
                return filteredPosts;
            }
        } catch (e) {
            console.error(e);
        }
    }
}
