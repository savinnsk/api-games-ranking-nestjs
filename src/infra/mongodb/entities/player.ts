import { Document } from 'mongoose';
import { IPlayer } from '../../../domain/interfaces/models/player.interface';

export class Player extends Document implements IPlayer {
  phone: string;
  email: string;
  name: string;
  ranking: string;
  positionRanking: number;
  urlPhotoPlayer: string;
}
