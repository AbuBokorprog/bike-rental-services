import { model, Schema } from 'mongoose';
import { TRentals } from './rentals.interface';

const rentalsSchema = new Schema<TRentals>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Bike',
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: {
    type: Date,
    default: null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
});

export const rentals = model('Rental', rentalsSchema);