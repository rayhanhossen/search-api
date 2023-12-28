import { IsNotEmpty } from "class-validator";

export class CreateUserSearchDto {
    @IsNotEmpty()
    keyword: string;
}
