"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class User extends Model {
  repositories() {
    return this.hasMany("App/Models/Repository");
  }

  // quem_me_segue
  follower() {
    return this.hasMany("App/Models/Follower");
  }

  // quem_eu_sigo
  following() {
    return this.hasMany("App/Models/Following");
  }
}

module.exports = User;
