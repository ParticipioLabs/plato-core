const { Schema } = require("mongoose");

const UserSchema = new Schema({
  keycloakId: { type: String, index: true, required: true },
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  organizationId: { type: Schema.Types.ObjectId, index: true, required: true },
  isOrgAdmin: {
    type: Boolean,
    default: false,
  },
}).index({ keycloakId: 1, organizationId: 1 }, { unique: true }); // Unique on email + organization Id

module.exports = UserSchema;
