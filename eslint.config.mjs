import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                // Node.js globals
                process: 'readonly',
                // ES2021 globals
                Promise: 'readonly',
                Map: 'readonly',
                Set: 'readonly',
                // Add any other globals you need
            },
        },
        plugins: {
            react,
            '@typescript-eslint': typescript,
            'react-hooks': reactHooks,
            prettier,
            '@next/next': nextPlugin,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...typescript.configs.recommended.rules,
            ...prettier.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];

export default eslintConfig;