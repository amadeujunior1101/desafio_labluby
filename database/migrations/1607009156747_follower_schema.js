"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FollowerSchema extends Schema {
  up() {
    this.create("Followers", (table) => {
      table.increments();
      // id do seguido
      table.integer("user_id").unsigned().references("id").inTable("users");
      // id do seguidor
      table
        .integer("follower_user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("Followers");
  }
}

module.exports = FollowerSchema;
