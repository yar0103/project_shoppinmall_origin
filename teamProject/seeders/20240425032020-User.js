"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 100,
          userId: "userId0",
          password: "1234",
          gender: "M",
          userName: "userName0",
          email: "email0@naver.com",
          phoneNumber: "0",
          mainAddress: "main address 0",
          detailAddress: "detail address 0",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 101,
          userId: "userId1",
          password: "1234",
          gender: "M",
          userName: "userName1",
          email: "email1@naver.com",
          phoneNumber: "1",
          mainAddress: "main address 1",
          detailAddress: "detail address 1",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 102,
          userId: "userId2",
          password: "1234",
          gender: "M",
          userName: "userName2",
          email: "email2@naver.com",
          phoneNumber: "2",
          mainAddress: "main address 2",
          detailAddress: "detail address 2",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 103,
          userId: "userId3",
          password: "1234",
          gender: "M",
          userName: "userName3",
          email: "email3@naver.com",
          phoneNumber: "3",
          mainAddress: "main address 3",
          detailAddress: "detail address 3",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 104,
          userId: "userId4",
          password: "1234",
          gender: "M",
          userName: "userName4",
          email: "email4@naver.com",
          phoneNumber: "4",
          mainAddress: "main address 4",
          detailAddress: "detail address 4",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 105,
          userId: "userId5",
          password: "1234",
          gender: "F",
          userName: "userName5",
          email: "email5@naver.com",
          phoneNumber: "5",
          mainAddress: "main address 5",
          detailAddress: "detail address 5",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 106,
          userId: "userId6",
          password: "1234",
          gender: "F",
          userName: "userName6",
          email: "email6@naver.com",
          phoneNumber: "6",
          mainAddress: "main address 6",
          detailAddress: "detail address 6",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 107,
          userId: "userId7",
          password: "1234",
          gender: "F",
          userName: "userName7",
          email: "email7@naver.com",
          phoneNumber: "7",
          mainAddress: "main address 7",
          detailAddress: "detail address 7",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 108,
          userId: "userId8",
          password: "1234",
          gender: "F",
          userName: "userName8",
          email: "email8@naver.com",
          phoneNumber: "8",
          mainAddress: "main address 8",
          detailAddress: "detail address 8",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
        {
          id: 109,
          userId: "userId9",
          password: "1234",
          gender: "F",
          userName: "userName9",
          email: "email9@naver.com",
          phoneNumber: "9",
          mainAddress: "main address 9",
          detailAddress: "detail address 9",
          profileImg: "",
          isMaster: false,
          isDeleted: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
