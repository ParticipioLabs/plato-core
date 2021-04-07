const { Schema } = require("mongoose");

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subdomain: {
    type: String,
    required: true,
    unique: true,
  },
  customDomain: {
    type: String,
    unique: true,
    sparse: true,
  },
  logo: String,
  discourse: {
    url: String,
    apiKey: String,
    dreamsCategoryId: Number,
    minPostLength: {
      type: Number,
      default: 20,
    },
  },
  finishedTodos: {
    type: Boolean,
    required: true,
    default: false,
  },
}).index({ name: "text", subdomain: "text", customDomain: "text" });

module.exports = OrganizationSchema;
