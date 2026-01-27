import mongoose, { Schema, Document } from "mongoose";

export interface IServiceCategory extends Document {
  name: string;
  description: string;
  basePrice: number;
  isActive: boolean;
}

const serviceCategorySchema = new Schema<IServiceCategory >(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    basePrice: {
      type: Number,
      required: true,
      min: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IServiceCategory >("ServiceCategory", serviceCategorySchema);