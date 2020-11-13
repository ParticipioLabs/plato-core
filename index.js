const OrganizationMembershipSchema = require("./db/schemas/organizationMembership");
const OrganizationSchema = require("./db/schemas/organization");
const getConnection = require("./db/getConnection");
const getModels = require("./db/getModels");

module.exports = {
  db: {
    schemas: {
      OrganizationSchema,
      OrganizationMembershipSchema,
    },
    getConnection,
    getModels,
  },
};
