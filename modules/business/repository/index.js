const Business = require("../model");

module.exports = {
  async findById(user, id) {
    if (!user) return null;

    const business = await Business.findById(id);

    if (!business) return null;

    return business;
  }
};
