module.exports = {
  resolvers: {
    business: require("./business/resolvers"),
    client: require("./client/resolvers"),
    currency: require("./currency/resolvers"),
    invoice: require("./invoice/resolvers"),
    payment: require("./payment/resolvers"),
    product: require("./product/resolvers"),
    user: require("./user/resolvers")
  },

  schemas: {
    business: require("./business/schema"),
    client: require("./client/schema"),
    invoice: require("./invoice/schema"),
    user: require("./user/schema")
  },

  repositories: {
    business: require("./business/repository"),
    client: require("./client/repository"),
    currency: require("./currency/repository"),
    invoice: require("./invoice/repository"),
    payment: require("./payment/repository"),
    product: require("./product/repository"),
    user: require("./user/repository")
  },

  models: {
    Business: require("./business/model"),
    Client: require("./client/model"),
    Currency: require("./currency/model"),
    Invoice: require("./invoice/model"),
    Payment: require("./payment/model"),
    Product: require("./product/model"),
    User: require("./user/model")
  }
};
