import { UserSearch } from "src/modules/user-search/entities/user-search.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('post')
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

    @CreateDateColumn({ name: "createdAt", type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @ManyToOne((type) => UserSearch, (userSearch) => userSearch.posts)
    userSearch: UserSearch;
}
