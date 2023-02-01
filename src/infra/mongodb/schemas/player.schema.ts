import mongoose from 'mongoose';

export const playerSchema = new mongoose.Schema(
  {
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    ranking: String,
    positionRanking: Number,
    urlPhotoPlayer: String,
  },
  { timestamps: true, collection: 'players' },
);
