"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert(
        "VehicleProperties",
        [
          {
            name: "Cedula verde,azul y titulo del automotor",
            categoryId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Modelo identico de neumaticos",
            categoryId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Estado aparente del motor",
            categoryId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Estado del motor",
            categoryId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Modelo de luces",
            categoryId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Calidad de volante",
            categoryId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },

          {
            name: "Estado de butacas",
            categoryId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Escaneo computarizado",
            categoryId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.bulkDelete("VehicleProperties", null, {})
    );
  },
};
