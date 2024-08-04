export const setupFilesAfterEnv = ["<rootDir>/src/setupTests.js"];
export const testEnvironment = "jsdom";
export const moduleNameMapper = {
  "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
};
