"use strict";

const Repository = use("App/Models/Repository");
const User = use("App/Models/User");

class RepositoryController {
  async store({ request, response }) {
    try {
      const { name, description, public_, user_id } = request.all();

      const user = await User.query().where("id", user_id).fetch();

      let user_converted = user.toJSON();

      let removeSpaceNameUser = user_converted[0].name.replace(/\s+/g, "");
      let removeSpaceNameRepo = name.replace(/\s+/g, "");

      const repository = await Repository.create({
        name: name,
        description: description,
        public: public_,
        slug: (removeSpaceNameUser + removeSpaceNameRepo).toLowerCase(),
        user_id: user_id,
      });
      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Repository successfully created",
        user_message: "Repositório criado com sucesso",
        data: repository,
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

      const repository = await Repository.query()
        .with("respository_star")
        .where("user_id", user_id)
        .fetch();

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "Successfully listed repositories.",
        user_message: "Repositorios listados com sucesso.",
        data: {
          repository,
          // repository_star: repository_exist[0].respository_star.length,
        },
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

module.exports = RepositoryController;
