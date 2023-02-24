'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.addConstraint('Partidas',
    {
      type: 'foreign key',
      fields: ['userId'],
      name: 'partida_usuarios_fk',
      references: {
        table: 'usuarios',
        field: 'id'
      },

      onDelete: 'restrict',
      onUpdate: 'restrict'
    }
  );
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Partidas', 'foreign key');
  }
};