"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Following extends Model {
  // quem_me_segue
  users() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Following;
