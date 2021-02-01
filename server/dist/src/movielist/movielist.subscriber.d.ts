import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { MovieList } from './movielist.entity';
export declare class MovielistSubscriber implements EntitySubscriberInterface<MovieList> {
    constructor(connection: Connection);
    listenTo(): typeof MovieList;
    afterInsert(event: InsertEvent<any>): Promise<any>;
}
