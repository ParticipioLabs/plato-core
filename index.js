const UserSchema = require("./db/schemas/user");
const OrganizationSchema = require("./db/schemas/organization");
const getConnection = require("./db/getConnection");

module.exports = {
  db: {
    schemas: {
      OrganizationSchema,
      UserSchema,
    },
    getConnection,
  },
};
