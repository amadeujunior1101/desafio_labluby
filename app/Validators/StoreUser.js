"use strict";

class StoreUser {
  get rules() {
    return {
      name: "required",
      email: "required|unique:users",
      username: "required|unique:users",
    };
  }
  get messages() {
    return {
      "name.required": {
        type: "info",
        status_code: 400,
        message: "Required name",
        user_message: "Nome obrigatório",
        data: [],
      },

      "email.required": {
        type: "info",
        status_code: 400,
        message: "Required e-mail",
        user_message: "E-mail obrigatório",
        data: [],
      },
      "email.unique": {
        type: "info",
        status_code: 400,
        message: "Email already registered",
        user_message: "E-mail já cadastrado",
        data: [],
      },

      "username.required": {
        type: "info",
        status_code: 400,
        message: "Required username",
        user_message: "Username obrigatório",
        data: [],
      },
      "username.unique": {
        type: "info",
        status_code: 400,
        message: "Username already registered",
        user_message: "Username já cadastrado",
        data: [],
      },
    };
  }
  async fails(errorMessages) {
    return this.ctx.response.json(errorMessages[0].message);
  }
}

module.exports = StoreUser;
