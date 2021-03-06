const { model, Schema } = require('mongoose')

const Item = new Schema ({
  text: {
    type: String,
    unique: true,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  },
  user: {
    // the mongoose data type for ids
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

// const ItemModel = model('Item', Item)

module.exports = model('Item', Item)