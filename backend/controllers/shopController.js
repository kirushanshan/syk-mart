import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Shop from '../models/shopModel.js'

// @desc admin create a new shop user
// @route POST /api/shops
// @access  private/admin
const registerShop = asyncHandler(async (req, res) => {
  const { name, email, password, registerNumber } = req.body

  const userExist = await User.findOne({ email })
  const shopExist = await Shop.findOne({ registerNumber })

  if (userExist) {
    res.status(400)
    throw new Error('this email already used')
  }

  if (shopExist) {
    res.status(400)
    throw new Error('this shop already register')
  }

  const user = await User.create({
    name,
    email,
    password,
    isShopOwner: true,
  })

  if (user) {
    const shop = await Shop.create({
      user,
      registerNumber,
    })

    if (shop) {
      res.status(201).json({
        message: 'succesfully shop created',
      })
    } else {
      res.status(400)
      throw new Error('Something Went Wrong')
    }
  }
})

// @desc admin create a new shop user
// @route POST /api/shops
// @access  private/shopowner
const updateShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findOne({ user: req.user._id })

  console.log(req.user._id)

  if (shop) {
    shop.image = req.body.image || shop.image

    const uodatedShop = await shop.save()

    res.json({
      message: 'successfully updated',
    })
  } else {
    res.status(404)
    throw new Error('Shop Not Found or delete by admin')
  }
})

export { registerShop, updateShop }
