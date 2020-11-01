#!/bin/zsh

clear
npm install --save-dev babel-cli babel-preset-env eslint eslint-config-airbnb-base eslint-plugin-import jest nodemon prettier

npm install --save array-unique bcrypt body-parser cookie-parser dotenv express express-rate-limit express-rescue helmet http jsonwebtoken mongodb mongoose mongoose-unique-validator morgan validate.js validator

# "scripts": {
# "start": "nodemon ./server",
# "dev": "nodemon ./server",
# "format": "npx prettier --write .",
# "eslint": "./scripts/eslint",
# "docker-up": "./docker-up",
# "docker-down": "./docker-down",
# "test": "jest"
# },

exit 0
