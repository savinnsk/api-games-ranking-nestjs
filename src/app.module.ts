import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { env } from '../.env';

import { PlayersModule } from './modules/players.module';
import { PlayersController } from './controllers/players.controller';

@Module({
  imports: [
    MongooseModule.forRoot(env.db.mongodbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopoLogy: true,
      userFindAndModify: true,
    }),

    PlayersModule,
  ],
  controllers: [PlayersController],
  providers: [],
})
export class AppModule {}
