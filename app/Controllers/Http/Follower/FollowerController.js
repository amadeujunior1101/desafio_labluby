"use strict";

const Follower = use("App/Models/Follower");

class FollowerController {

  async show({ request, response }) {
    try {
      const { user_id } = request.get();

      const follower = await Follower.query()
        .with("users")
        .where("follower_user_id", user_id)
        .fetch();

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Successfully listed follower.",
        user_message: "Seguidos listados com sucesso.",
        data: follower,
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

module.exports = FollowerController;
