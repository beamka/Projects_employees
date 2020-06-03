#!/usr/bin/env bash
npm run build:prod employees-gui  && cat dist/employees-gui/runtime.js dist/employees-gui/main.js dist/employees-gui/polyfills.js> preview/test.js
