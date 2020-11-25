const OrgMemberSchema = require("./schemas/orgMember");
const OrganizationSchema = require("./schemas/organization");

let models = null;

const getModels = (db) => {
  if (models === null)
    models = {
      Organization: db.model("Organization", OrganizationSchema),
      OrgMember: db.model("OrgMember", OrgMemberSchema),
    };

  return models;
};

module.exports = getModels;
