import { Post } from "src/modules/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_search')
export class UserSearch {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    keyword: string;

    @CreateDateColumn({ name: "createdAt", type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @OneToMany((type) => Post, (post) => post.userSearch)
    posts: Post[];
}
