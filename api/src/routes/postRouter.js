const { Router } = require("express");
const {
  getPostsHandler,
  createPostsHandler,
} = require("../handlers/postHandler");
const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.post("/", createPostsHandler);

module.exports = postRouter;
