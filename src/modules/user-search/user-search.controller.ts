import { Controller } from '@nestjs/common';
import { UserSearchService } from './user-search.service';

@Controller({ path: 'user-search' })
export class UserSearchController {
    constructor(private readonly userSearchService: UserSearchService) { }

}
