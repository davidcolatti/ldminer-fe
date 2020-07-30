const Lead = require("../models/Lead");

const resolvers = {
  Query: {
    leads: async () => {
      const res = await Lead.find();

      return res;
    },
    leadsCount: async () => {
      const res = await Lead.countDocuments();

      return res;
    },
    findUser: async (_, { uid }) => {
      return `hi the uid is: ${uid}`;
    },
  },
};

module.exports = resolvers;
