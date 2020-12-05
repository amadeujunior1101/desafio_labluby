"use strict";

const Seguindo = use("App/Models/Seguindo");

class SeguindoController {

  async show({ request, response }) {
    try {
      const { user_id } = request.get();

      const seguindo = await Seguindo.query()
        .with("users")
        .where("seguindo_user_id", user_id)
        .fetch();

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Successfully listed following.",
        user_message: "Seguidos listados com sucesso.",
        data: seguindo,
      });
    } catch (error) {
      return response.status(200).json({
        type: "error",
        status_code: 503,
        message: "exception found",
        user_message: "Desculpe-nos, houve um problema",
        data: [],
      });
    }
  }
}

module.exports = SeguindoController;
