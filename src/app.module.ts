import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { UserSearchModule } from './modules/user-search/user-search.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        // Configure the dotenv globlally 
        ConfigModule.forRoot({ isGlobal: true }),
        // MySQL database connection 
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.HOST,
            port: parseInt(process.env.PORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            autoLoadEntities: true,
            synchronize: true,
            dropSchema: false
        }),
        // Import the module of posts and users search
        PostModule,
        UserSearchModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
