import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from 'src/domain/dtos/create-player.dto';
import { IPlayer } from 'src/domain/interfaces/models/player.interface';
import { Player } from 'src/infra/mongodb/entities/player';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}
  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<IPlayer> {
    return new Promise((resolve) => resolve(null));
  }

  async findAllPlayers() {
    return new Promise((resolve) => resolve(null));
  }

  async findByPlayEmail(email: string) {
    return new Promise((resolve) => resolve(null));

    //sdasd
  }

  async updatePlayer() {
    return new Promise((resolve) => resolve(null));
  }

  async removeAPlayer(id: string) {
    return new Promise((resolve) => resolve(null));
  }
}
