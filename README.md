# CafeMenu - QR Code-Based Menu for Cafes and Restaurants

## 📖 Overview

**CafeMenu** is a platform designed for cafes and restaurants to digitize their menus using QR codes. Customers can scan the QR code at their table to access the menu on their devices. Future updates will include online ordering and discount options to enhance the dining experience.

## ✨ Features

- Generate a unique QR code for each table, linked to the restaurant's menu.
- Seamless menu display for customers after scanning the QR code.
- Backend support with **Node.js** and **Sequelize** for efficient data management.
- Scalable architecture to support future functionalities, such as:
  - Online ordering system.
  - Various discount options and promotions.

## 🛠️ Technologies Used

- **Node.js**: Backend framework.
- **EJS**: View engine for dynamic HTML rendering.
- **Sequelize**: ORM for database management.
- **AdminJS**: For admin panel management (planned feature).

## 🚀 Installation

### Prerequisites

- **Node.js** (v16 or higher).
- **NPM** or **Yarn** package manager.
- **MySQL** database (or your preferred relational database).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cafemenu.git
   cd cafemenu
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     DATABASE_URL=your-database-url
     PORT=3000
     ```
4. Run migrations and seed data:
   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
5. Start the application:
   ```bash
   npm start
   ```

## 📖 Usage

1. Access the admin panel to create and manage menus.
2. Generate QR codes for tables and print them.
3. Customers scan the QR codes to view the menu on their devices.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request. Follow the existing code style and include clear descriptions for any changes.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📧 Contact

For support or inquiries, contact:  
**Ehsan**

- Email: your-email@example.com
