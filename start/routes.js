"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  /**Resources users */
  Route.get("users-list", "User/UserController.index");
  Route.post("user-create", "User/UserController.store");
  Route.post("user-authenticate", "User/UserController.authenticate");

  /**Resources repository */
  Route.get("repository-show", "Repository/RepositoryController.show");
  Route.post("repository-create", "Repository/RepositoryController.store");

  /**Resources repository star */
  Route.post(
    "repository-star-create",
    "RepositoryStar/RepositoryStarController.store"
  );

  /**Resources follower*/
  Route.get("follower-show", "Follower/FollowerController.show");

  /**Resources following*/
  Route.post("following-create", "Following/FollowingController.store");
  Route.get("following-show", "Following/FollowingController.show");
});
