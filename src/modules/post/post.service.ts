import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import axios from 'axios';

@Injectable()
export class PostService {
  async searchPost(keyword: string): Promise<Post[] | Error> {
    try {
      // Fetch external API data
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if (response.status !== 200) return new Error("Failed to fetch data");
      const postData = response.data;

      // Filter posts based on the keyword
      const filteredPosts = postData.filter((item: Post) => item.title.includes(keyword) || item.body.includes(keyword));
      console.log(filteredPosts)
    } catch (e) {
      console.error(e);
    }
  }
}
