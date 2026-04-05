/** @type {import('jest').Config} */
const config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { jsx: "react-jsx" } }],
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "\\.(png|jpg|jpeg|svg|webm)$": "<rootDir>/__mocks__/fileMock.js",
    },
    testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.test.tsx"],
};

module.exports = config;
