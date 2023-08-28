import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    shopDetails: {
      type: String,
    },
    registerNumber: {
      type: Number,
      require: true,
      unique: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
)

const Shop = mongoose.model('Shop', shopSchema)

export default Shop
