import { Controller, Get } from '@nestjs/common';
import { PostInterface } from './interfaces/post.interface';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  fetchAllPosts(): Promise<PostInterface[]> {
    return this.postService.fetchAllPosts();
  }
}
