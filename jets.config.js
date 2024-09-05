/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest/presets/default-esm',  // Включаем поддержку ESM
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': 'ts-jest',  // Используем ts-jest для работы с TypeScript
    },
    extensionsToTreatAsEsm: ['.ts'],  // Указываем, что TypeScript файлы (.ts) рассматриваются как ESM
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',  // Сопоставляем модули, чтобы корректно работали импорты без расширений
    },
    globals: {
      'ts-jest': {
        useESM: true,  // Включаем поддержку ES-модулей в ts-jest
      },
    },
    moduleFileExtensions: ['ts', 'js'],  // Указываем расширения файлов для работы
  };