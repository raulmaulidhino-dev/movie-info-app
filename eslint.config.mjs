import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    // Atur linting untuk file JS dan mjs
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2021, // Mendukung sintaks ES6+
      sourceType: 'module', // Mendukung ES Module
      globals: globals.node // Menggunakan globals untuk Node.js
    },
    plugins: {
      js: pluginJs
    },
    rules: {
      // Aturan dasar ESLint
      'semi': ['error', 'always'], // Wajib menggunakan titik koma
      'quotes': ['error', 'single'], // Menggunakan single quotes
      'eqeqeq': ['error', 'always'], // Wajib menggunakan perbandingan ketat
      'no-unused-vars': ['warn'], // Peringatan untuk variabel yang tidak digunakan
      'curly': ['error', 'all'], // Wajib menggunakan curly braces di semua block
      'no-console': 'off', // Mengizinkan penggunaan console (penting untuk debugging di Node.js)
      'indent': ['error', 2], // Mengatur indentasi menggunakan 2 spasi
      'comma-dangle': ['error', 'never'] // Tidak menggunakan koma di akhir objek atau array
    }
  },
  {
    // Konfigurasi khusus untuk file `webpack.config.js`
    files: ['webpack.config.js'],
    rules: {
      'no-console': 'off' // Mengizinkan penggunaan console di file konfigurasi
    }
  }
];
