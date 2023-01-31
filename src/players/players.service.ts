import { Injectable } from '@nestjs/common';

import { Player } from './interfaces/player.interface';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Injectable()
export class PlayersService {
  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    return new Promise((resolve) => resolve(null));
  }

  async findAllPlayers() {
    return new Promise((resolve) => resolve(null));
  }

  async findByPlayEmail(email: string) {
    return new Promise((resolve) => resolve(null));
  }

  async updatePlayer() {
    return new Promise((resolve) => resolve(null));
  }

  async removeAPlayer(id: string) {
    return new Promise((resolve) => resolve(null));
  }
}
