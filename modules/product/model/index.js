const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String,
    description: String,
    sac: String,
    sku: String,
    defaults: {
      price: Number,
    },

    /* relationships  */
    business: {
      type: Schema.Types.ObjectId,
      ref: "Business"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", schema);
