"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Segue extends Model {
  // quem_me_segue
  users() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Segue;
