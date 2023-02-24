'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Areas', [
    {
     id:1,
     nome: 'Engenharia de Software',
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      id:2,
      nome: 'Ciências da Computação',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      id:3,
      nome: 'Engenharia da Computação',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ], {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
