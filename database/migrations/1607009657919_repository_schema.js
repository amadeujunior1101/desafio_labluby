"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RepositorySchema extends Schema {
  up() {
    this.create("repositories", (table) => {
      table.increments();
      table.string("name", 254).notNullable();
      table.string("description");
      table.string("public");
      table.string("slug");
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("repositories");
  }
}

module.exports = RepositorySchema;
