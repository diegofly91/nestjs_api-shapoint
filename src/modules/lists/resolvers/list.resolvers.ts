import { UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { ListService } from '../services';
import { List } from '../interfaces';
import { AuthGuard } from '@/modules/auth/guards/';
import { ISitePayload } from '@/modules/auth/interfaces';

@Resolver()
export class ListResolver {
    constructor(private readonly listService: ListService) {}

    @UseGuards(AuthGuard)
    @Query()
    public async getListBySiteId(@Context('site') { token, id }: ISitePayload): Promise<List[]> {
        return await this.listService.getListBySiteId(token, id);
    }
}
