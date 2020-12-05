"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("name", 254).notNullable();
      table.string("email", 254).notNullable().unique();
      table.text("localization");
      table.text("avatar");
      table.string("username").notNullable().unique();
      table.text("bio");
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
