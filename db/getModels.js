const OrganizationMembershipSchema = require("./schemas/organizationMembership");
const OrganizationSchema = require("./schemas/organization");

let models = null;

const getModels = (db) => {
  if (models === null)
    models = {
      Organization: db.model("Organization", OrganizationSchema),
      OrganizationMembership: db.model(
        "OrganizationMembership",
        OrganizationMembershipSchema
      ),
    };

  return models;
};

module.exports = getModels;
