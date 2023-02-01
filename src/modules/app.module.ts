import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { env } from '../../.env';

import { PlayersModule } from './players.module';
import { PlayersController } from '../controllers/players.controller';
import { playerSchema } from '../infra/mongodb/schemas/player.schema';
import { PlayersService } from '../services/players.service';

@Module({
  imports: [
    MongooseModule.forRoot(env.db.mongodbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopoLogy: true,
      userFindAndModify: true,
    }),
    MongooseModule.forFeature([{ name: 'Player', schema: playerSchema }]),
    PlayersModule,
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class AppModule {}
