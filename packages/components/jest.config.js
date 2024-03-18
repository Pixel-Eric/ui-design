require("jsdom-global")();

module.exports = {
  transform: {
    "^.+\\.(jsx|js|mjs)?$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue2-jest",
    "^.+\\.(tsx|ts)?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  moduleFileExtensions: ["vue", "js", "jsx", "ts", "tsx", "json"],
};
