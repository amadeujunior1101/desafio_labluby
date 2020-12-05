'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repository extends Model {
  respository_star() {
    // return this.hasMany("App/Models/Star", "id", "user_id");
    return this.hasMany("App/Models/Star");
  }
}

module.exports = Repository
