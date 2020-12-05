"use strict";

const Following = use("App/Models/Following");
const Follower = use("App/Models/Follower");

class FollowingController {
  async store({ request, response }) {
    try {
      const { user_id, following_user_id } = request.all();

      const following = await Following.create({
        user_id: user_id,
        following_user_id: following_user_id,
      });

      await Follower.create({
        user_id: following_user_id,
        follower_user_id: user_id,
      });

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Follower successfully created",
        user_message: "Seguidor criado com sucesso",
        data: following,
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

      const following = await Following.query()
        .with("users")
        .where("following_user_id", user_id)
        .fetch();

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Successfully listed follower.",
        user_message: "Seguidores listados com sucesso.",
        data: following,
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

module.exports = FollowingController;
