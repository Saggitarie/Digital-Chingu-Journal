import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { BlogPostInterface } from './interface/post.interface';
// import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(BlogPost)
    private postRepository: Repository<BlogPost>,
  ) {}

  async fetchAllPosts(): Promise<BlogPost[]> {
    return await this.postRepository.find();
  }

  async createBlogPost(blogPost: BlogPostInterface): Promise<void> {
    await this.postRepository.insert({
      title: blogPost.title,
      body: blogPost.body,
    });
  }
}
