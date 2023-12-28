import { Controller, Get, Ip, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller({ path: 'search' })
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    async search(@Query('keyword') keyword: string, @Ip() userIp: string): Promise<any | Error> {
        return this.postService.searchPost(keyword, userIp);
    }
}
