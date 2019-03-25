const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    invoiceNumber: String,
    invoiceDate: Date,
    dueDate: Date,
    poNumber: String,
    shippingAddress1: String,
    shippingAddress2: String,
    items: [Schema.Types.Mixed],
    taxes: [Schema.Types.Mixed],
    attachments: [Schema.Types.Mixed],
    notes: String,

    /** Relationships */
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },

    client: {
      type: Schema.Types.ObjectId,
      ref: "Client"
    },

    business: {
      type: Schema.Types.ObjectId,
      ref: "Business"
    },

    payments: {
      type: [Schema.Types.ObjectId],
      ref: "Payment"
    },

    currency: {
      type: Schema.Types.ObjectId,
      ref: "Payment"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Invoice", schema);
