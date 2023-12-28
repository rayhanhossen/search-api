import { UserSearch } from "src/modules/user-search/entities/user-search.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'post' })
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: number;

    @Column()
    externalId: number;

    @Column()
    title: string;

    @Column({ type: 'longtext' })
    body: string;

    @Column()
    userIp: string;

    @ManyToOne((type) => UserSearch, (userSearch) => userSearch.posts)
    userSearch: UserSearch;

    @CreateDateColumn({ name: "timeStamp", type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    timeStamp: Date;
}
