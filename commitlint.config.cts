const types = [
  "build", // 修改构建配置或者打包工具配置
  "feat", // 新增功能模块
  "docs", // 新增、修改或删除文档
  "fix", // 缺陷修复
  "ci", // 持续集成相关内容
  "chore", // 构建工具调整或变化
  "pref", // 优化组件性能
  "refactor", // 重构组件库或工具库代码
  "style", // 样式方面的优化，不影响组件
  "test", // 测试方面的内容
];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", types],
  },
};
