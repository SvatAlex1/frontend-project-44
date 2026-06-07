import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    plugins: { 
      js,
      '@stylistic': stylistic, 
    }, 
    extends: ['js/recommended'], 
    languageOptions: { 
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, 
      },
    },
    rules: {
      '@stylistic/indent': ['error', 2],        
      '@stylistic/quotes': ['error', 'single'],     
      '@stylistic/semi': ['error', 'always'],       
      'no-unused-vars': 'warn',                   
    },
  },
]);
