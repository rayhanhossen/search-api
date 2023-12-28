import { Post } from "src/modules/post/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_search' })
export class UserSearch {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    keyword: string;

    @OneToMany((type) => Post, (post) => post.userSearch)
    posts: Post[];

    @CreateDateColumn({ name: "timeStamp", type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    timeStamp: Date;
}
