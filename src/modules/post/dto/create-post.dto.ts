import { IsNotEmpty } from "class-validator";
import { UserSearch } from "src/modules/user-search/entities/user-search.entity";

export class CreatePostDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    externalId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    body: string;

    @IsNotEmpty()
    userSearch: UserSearch;
}
