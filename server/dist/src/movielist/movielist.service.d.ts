import { Repository } from 'typeorm';
import { MovieList } from './movielist.entity';
import { Movielist } from './movielist.interface';
export declare class MovielistService {
    private movieListRepository;
    constructor(movieListRepository: Repository<MovieList>);
    fetchAll(): Promise<Movielist[]>;
    insertOne(movieName: any): Promise<void>;
}
