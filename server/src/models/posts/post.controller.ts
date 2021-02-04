import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';
// import { PostDto } from './dto/post.dto';

@Controller('post')
@ApiTags('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  fetchAllPosts(): Promise<Post[]> {
    return this.postService.fetchAllPosts();
  }
}
