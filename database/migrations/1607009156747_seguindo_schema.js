"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SeguindoSchema extends Schema {
  up() {
    this.create("seguindos", (table) => {
      table.increments();
      // id do seguido
      table.integer("user_id").unsigned().references("id").inTable("users");
      // id do seguidor
      table
        .integer("seguindo_user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("seguindos");
  }
}

module.exports = SeguindoSchema;
