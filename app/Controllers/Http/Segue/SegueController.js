"use strict";

const Segue = use("App/Models/Segue");
const Seguindo = use("App/Models/Seguindo");

class SegueController {
  async store({ request, response }) {
    try {
      const { user_id, segue_user_id } = request.all();

      const segue = await Segue.create({
        user_id: user_id,
        segue_user_id: segue_user_id,
      });

      await Seguindo.create({
        user_id: segue_user_id,
        seguindo_user_id: user_id,
      });

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Follower successfully created",
        user_message: "Seguidor criado com sucesso",
        data: segue,
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

  async show({ request, response }) {
    try {
      const { user_id } = request.get();

      const segue = await Segue.query()
        .with("users")
        .where("segue_user_id", user_id)
        .fetch();

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Successfully listed follower.",
        user_message: "Seguidores listados com sucesso.",
        data: segue,
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

module.exports = SegueController;
