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
  ){}
  async searchPost(keyword: string): Promise<Post[] | Error> {
    try {
      //  Create entity of userSearch and save keyword in database
      const userSearch: any = await this.userSearchRepo.createEntity({keyword} as CreateUserSearchDto);

      // Fetch external API data
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if (response.status !== 200) return new Error("Failed to fetch data");
      const postData = response.data;

      // Filter posts based on the keyword
      const filteredPosts = postData
        .filter((item: Post) => item.title.includes(keyword) || item.body.includes(keyword));

      // Create post entity based on filterPosts and save in DB 
      const savedPost = await this.postRepo.createEntity(filteredPosts, userSearch);
      
      // Save asssosiated post with the user search 
      userSearch.posts = savedPost;
      await this.userSearchRepo.save(userSearch);
      return filteredPosts; 
    } catch (e) {
      console.error(e);
    }
  }
}
