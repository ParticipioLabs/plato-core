const OrgMemberSchema = require("./schemas/orgMember");
const OrganizationSchema = require("./schemas/organization");
const getConnection = require("./db/getConnection");
const getModels = require("./db/getModels");

module.exports = {
  db: {
    schemas: {
      OrganizationSchema,
      OrgMemberSchema,
    },
    getConnection,
    getModels,
  },
};
