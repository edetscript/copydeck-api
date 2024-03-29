import { model, Schema } from 'mongoose';
import { IInvoice } from '../types/invoice';

const InvoiceSchema = new Schema(
  {
    invoiceId: {
      type: String,
      required: true,
    },
    planType: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    authorId: {
      type: String,
      required: true,
    },
    authorFname: {
      type: String,
      required: true,
    },
    authorLname: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
    },
    isCreated: {
      type: Date,
      default: Date.now,
    },
    isUpdated: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<IInvoice>('Invoice', InvoiceSchema);
