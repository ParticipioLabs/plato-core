const { Schema } = require("mongoose");

const OrgMemberSchema = new Schema({
  userId: { type: String, index: true, required: true },
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
  discourseUsername: String,
}).index({ userId: 1, organizationId: 1 }, { unique: true }); // Unique on keycloak id + organization Id

module.exports = OrgMemberSchema;
