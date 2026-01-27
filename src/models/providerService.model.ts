import mongoose, { Schema, Document } from "mongoose";

export interface IProviderService extends Document {
  providerId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  title: string;
  price: number;
  description: string;
  durationInHours: number;
  isActive: boolean;
}

const providerServiceSchema = new Schema<IProviderService>(
  {
    providerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "ServiceCategory",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    durationInHours: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IProviderService>("ProviderService", providerServiceSchema);
