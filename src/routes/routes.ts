import { Router, RequestHandler } from "express";
import { findTasks, findTaskrById, createTask, UpdateTask, DeleteTask } from "@controllers/usersControllers";
import { createRoles, DeleteRoles, findRoles, findRolesById, UpdateRoles } from "@controllers/RolesControllers";
import { loginUser, registerUser } from "@controllers/auth/authControllers";
import { verifyToken } from "middlewares/auth";
import { createPosts, deletePosts, findPosts, findPostsById, updatePosts } from "@controllers/postsControllers";

const router = Router();

export default () => {
  /* auth Routes */
  router.post("/auth/register", registerUser as RequestHandler)
  router.post("/auth/login", loginUser as RequestHandler)


  /* Rutas de tareas */
  router.get("/tasks",verifyToken, findTasks as RequestHandler);
  router.get("/tasks/:id",verifyToken, findTaskrById as RequestHandler);
  router.post("/tasks",verifyToken, createTask as RequestHandler);
  router.put("/tasks/:id",verifyToken, UpdateTask as RequestHandler);
  router.delete("/tasks/:id",verifyToken, DeleteTask as RequestHandler);

  /* Rutas de roles */
  router.get("/roles",verifyToken, findRoles as RequestHandler);
  router.get("/roles/:id",verifyToken, findRolesById as RequestHandler);
  router.post("/roles",verifyToken, createRoles as RequestHandler);
  router.put("/roles/:id",verifyToken, UpdateRoles as RequestHandler);
  router.delete("/roles/:id",verifyToken, DeleteRoles as RequestHandler);

  /* rutas de posts */
  router.get("/posts",findPosts as RequestHandler);
  router.get("/posts/:id", findPostsById as RequestHandler);
  router.post("/posts",verifyToken, createPosts as RequestHandler);
  router.put("/posts/:id",verifyToken, updatePosts as RequestHandler);
  router.delete("/posts/:id",verifyToken, deletePosts as RequestHandler);

  return router;
};
