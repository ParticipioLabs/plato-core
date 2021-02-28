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
  discourse: new Schema({
    url: String,
    apiKey: String,
    dreamsCategoryId: Number,
  }),
}).index({ name: "text", subdomain: "text", customDomain: "text" });

module.exports = OrganizationSchema;
