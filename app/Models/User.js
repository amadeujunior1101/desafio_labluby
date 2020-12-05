"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class User extends Model {
  repositories() {
    return this.hasMany("App/Models/Repository");
  }

  // quem_me_segue
  quem_me_segue() {
    return this.hasMany("App/Models/Seguindo");
  }

  // quem_eu_sigo
  quem_eu_sigo() {
    return this.hasMany("App/Models/Segue");
  }
}

module.exports = User;
