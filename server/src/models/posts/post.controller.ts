import { Controller, Get, Post, Put, Delete, Body, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogPost } from './entities/blog-post.entity';
import { PostService } from './post.service';
import { CreateBlogPostDto } from './dto/post.dto';

@Controller('post')
@ApiTags('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  fetchAllPosts(): Promise<BlogPost[]> {
    return this.postService.fetchAllPosts();
  }

  // @Post: Set new post corresponding to user_id
  @Post()
  createBlogPost(@Body() createBlogPostDto: CreateBlogPostDto) {
    return this.postService.createBlogPost(createBlogPostDto);
  }

  // @Put: Edit the body or title of the post

  // @Delete: Delete the post corresponding to user_id and post.id
}
