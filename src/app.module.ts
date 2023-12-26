import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { UserSearchModule } from './modules/user-search/user-search.module';

@Module({
  imports: [PostModule, UserSearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
