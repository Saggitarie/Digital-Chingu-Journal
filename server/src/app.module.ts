import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as ormconfig from '../ormconfig';
import { PostModule } from './models/posts/post.module';
import { UserModule } from './models/users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, PostModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
