'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkInsert('Students', [{
        firstName: "John",
        lastName: "Doe",
        email: "jdoe@gmail.com",
        phone: "(123)555-555",
        onTLS: "johndoe",
        referralSource: "toplawschools.com",
        school: "State University",
        firstExam: "2018-12-11",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {});
  }
};
