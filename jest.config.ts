// export default {
//   preset: "ts-jest",
//   testEnvironment: "jest-environment-jsdom",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//     // process `*.tsx` files with `ts-jest`
//   },
//   rootDir: "src",
//   moduleNameMapper: {
//     "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
//     "^@app/(.*)$": "<rootDir>/$1",
//   },
// };

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.svg$": "jest-transform-stub",
    "\\.(gif|ttf|eot|svg|png)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
