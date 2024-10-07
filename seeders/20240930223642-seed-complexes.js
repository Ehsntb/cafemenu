"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Complexes", [
      {
        name: "Café Delight",
        type: "cafe",
        location: "Downtown",
        address: "123 Main St, Cityville",
        description:
          "A cozy cafe with a selection of gourmet coffees and pastries.",
        working_hours: "8 AM - 8 PM",
        working_days: "Monday - Sunday",
        phone: "123-456-7890",
        email: "info@cafedelight.com",
        short_link: "cafe123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Gourmet Bistro",
        type: "restaurant",
        location: "Uptown",
        address: "456 High St, Cityville",
        description: "An elegant restaurant offering a fine dining experience.",
        working_hours: "5 PM - 11 PM",
        working_days: "Wednesday - Sunday",
        phone: "987-654-3210",
        email: "contact@gourmetbistro.com",
        short_link: "bistro456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fusion Eatery",
        type: "both",
        location: "Midtown",
        address: "789 Central Ave, Cityville",
        description:
          "A unique blend of cafe and restaurant serving diverse cuisines.",
        working_hours: "10 AM - 10 PM",
        working_days: "Monday - Saturday",
        phone: "555-123-4567",
        email: "hello@fusioneatery.com",
        short_link: "fusion789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Complexes", null, {});
  },
};
