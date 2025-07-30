// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  // 테스트 파일용 설정 추가
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      "testing-library": require("eslint-plugin-testing-library"),
    },
    rules: {
      ...require("eslint-plugin-testing-library").configs.react.rules,
    },
  },
]);
