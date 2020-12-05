"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SegueSchema extends Schema {
  up() {
    this.create("segues", (table) => {
      table.increments();
      // id do seguido
      table.integer("user_id").unsigned().references("id").inTable("users");
      // id do seguidor
      table
        .integer("segue_user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("segues");
  }
}

module.exports = SegueSchema;
