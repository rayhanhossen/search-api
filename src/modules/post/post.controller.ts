import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('search')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    async search(@Query('keyword') keyword: string): Promise<any | Error> {
        return this.postService.searchPost(keyword);
    }
}
