# Vue Source Maps reproduction

This repository is meant to reproduce the desired behaviour being discussed in https://github.com/laravel-mix/laravel-mix/issues/3131. It displays a way to enable source maps for the generated files, while actively disabling source maps for injected CSS.

## Running

1. Run `npm install`
2. Run `npm run build`
3. Open `public/index.html` in a browser
