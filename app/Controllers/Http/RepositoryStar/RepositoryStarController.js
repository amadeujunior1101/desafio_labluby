"use strict";

const Star = use("App/Models/Star");

class RepositoryStarController {
  async store({ request, response }) {
    try {
      const { repository_id, user_id } = request.all();

      const star = await Star.create({
        repository_id: repository_id,
        user_id: user_id,
      });

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Star added to repository",
        user_message: "Estrela adicionada ao repositório",
        data: star,
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

module.exports = RepositoryStarController;
