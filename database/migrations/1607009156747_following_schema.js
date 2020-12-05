"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FollowingSchema extends Schema {
  up() {
    this.create("followings", (table) => {
      table.increments();
      // id do seguido
      table.integer("user_id").unsigned().references("id").inTable("users");
      // id do seguidor
      table
        .integer("following_user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("followings");
  }
}

module.exports = FollowingSchema;
