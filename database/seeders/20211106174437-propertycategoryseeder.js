'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   return Promise.all([
      queryInterface.bulkInsert(
        "PropertyCategories",
        [
          {
            name: "Documentación y mantenimiento",
            icon: "https://img.icons8.com/fluency-systems-regular/48/000000/doc.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Ruedas, frenos y  suspensión",
            icon: "https://img.icons8.com/carbon-copy/100/000000/wheels-chocked.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Carroceria",
            icon: 'img src="https://img.icons8.com/ios-glyphs/30/000000/car.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Motor",
            icon: "https://img.icons8.com/material-outlined/24/000000/2x6-vehicle.png",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Volante y tablero",
            icon: 'https://img.icons8.com/ios-glyphs/30/000000/steering-wheel.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Alumbrado",
            icon: 'https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-light-cars-components-those-icons-fill-those-icons-1.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Interior y asientos",
            icon: 'https://img.icons8.com/ios/50/000000/car-seat.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Interior general",
            icon: 'https://img.icons8.com/fluency-systems-regular/48/000000/car.png',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ],
        {}
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.bulkDelete("PropertyCategories", null, {}),
      );
  }
};
