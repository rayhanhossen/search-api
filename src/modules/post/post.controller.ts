import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('search')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async search(@Query('keyword') keyword: string): Promise<any | Error> {
    return this.postService.searchPost(keyword);
  }
}
