#!/bin/bash

# echo "Installing npm dependencies..."
# npm install

# echo "Dropping the database..."
# npx sequelize-cli db:drop

# echo "Creating the database..."
# npx sequelize-cli db:create

echo "Undo all migrayions..."
npx sequelize-cli db:migrate:undo:all

echo "Running migrations..."
npx sequelize-cli db:migrate

echo "Running seeders..."
npx sequelize-cli db:seed:all

# echo "Starting development server..."
# npm start

echo "Setup complete."