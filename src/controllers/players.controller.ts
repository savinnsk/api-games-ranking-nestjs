import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CreatePlayerDto } from '../domain/player/dtos/create-player.dto';
import { Player } from '../domain/player/interfaces/player.interface';
import { PlayersService } from '../services/players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post()
  async createUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const player = await this.playerService.createUpdatePlayer(createPlayerDto);

    return player;
  }

  @Get()
  async findAllPlayers(@Query('email') email: string): Promise<Player[]> {
    const players = await this.playerService.findAllPlayers();
    return null;
  }

  @Delete()
  async removePlayer(@Query('email') email: string): Promise<any> {
    return null;
  }
}
