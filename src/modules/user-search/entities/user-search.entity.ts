import { Post } from "src/modules/post/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_search')
export class UserSearch {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    keyword: string;

    @OneToMany((type) => Post, (post) => post.userSearch)
    posts: Post[];
}
