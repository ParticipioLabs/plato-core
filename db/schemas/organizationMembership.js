const { Schema } = require("mongoose");

const OrganizationMembershipSchema = new Schema({
  keycloakId: { type: String, index: true, required: true },
  organizationId: { type: Schema.Types.ObjectId, index: true, required: true },
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isOrgAdmin: {
    type: Boolean,
    default: false,
  },
}).index({ keycloakId: 1, organizationId: 1 }, { unique: true }); // Unique on email + organization Id

module.exports = OrganizationMembershipSchema;
