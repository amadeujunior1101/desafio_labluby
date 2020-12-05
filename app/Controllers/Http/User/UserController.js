"use strict";

const User = use("App/Models/User");
const Token = use("App/Models/Token");

class UserController {
  async index({ request, response }) {
    try {
      const user = await User.query().fetch();

      return response.status(200).json({
        type: "info",
        status_code: 200,
        message: "Users successfully listed.",
        user_message: "Usuários listados com sucesso.",
        data: user,
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

  async store({ request, response }) {
    try {
      const { name, email, localization, avatar, bio } = request.all();
      var part_username = email;
      var result = part_username.substring(0, 5);
      const value = Math.floor(Math.random() * 10000 + 1);

      const userFind = await User.query().where("email", email).fetch();

      let user_exist = userFind.toJSON();

      if (user_exist.length > 0)
        return response.status(200).json({
          type: "info",
          status_code: 200,
          message: "User already registered",
          user_message: "Usuário já cadastrado",
          data: [],
        });

      const user = await User.create({
        name: name,
        email: email,
        localization: localization,
        avatar: avatar,
        username: result + "" + value,
        bio: bio,
      });
      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "User successfully registered",
        user_message: "Usuário cadastrado com sucesso",
        data: user,
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

  async authenticate({ request, response }) {
    try {
      const { email } = request.all();

      const user = await User.query()
        .where("email", email)
        .with("repositories")
        .with("quem_me_segue")
        .with("quem_eu_sigo")
        .fetch();

      let user_exist = user.toJSON();

      if (user_exist.length === 0)
        return response.status(200).json({
          type: "info",
          status_code: 200,
          message: "User not found.",
          user_message: "Usuário não encontrado.",
          data: [],
        });

      await Token.create({
        user_id: user_exist[0].id,
      });

      return response.status(201).json({
        type: "success",
        status_code: 201,
        message: "User successfully listed.",
        user_message: "Usuário listado com sucesso.",
        data: {
          user: user,
          countRepos: user_exist[0].repositories.length,
          countSeguindo: user_exist[0].quem_eu_sigo.length,
          countSegue: user_exist[0].quem_me_segue.length,
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

module.exports = UserController;
