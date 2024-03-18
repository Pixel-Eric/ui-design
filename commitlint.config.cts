const types = ["feat", "fix"];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "tpye-enum": [2, "always", types],
  },
};
