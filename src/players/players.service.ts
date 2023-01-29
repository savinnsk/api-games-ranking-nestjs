import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Injectable()
export class PlayersService {
  async createUpdatePlayer(createPlayerDto: CreatePlayerDto) {}
}
