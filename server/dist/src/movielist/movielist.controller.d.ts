import { MovielistService } from './movielist.service';
import { Request } from 'express';
import { MovielistSubscriber } from './movielist.subscriber';
import { Movielist } from './movielist.interface';
export declare class MovielistController {
    private movieListService;
    private movieListSubscriber;
    constructor(movieListService: MovielistService, movieListSubscriber: MovielistSubscriber);
    fetchAll(): Promise<Movielist[]>;
    insertOne(request: Request): void;
}
