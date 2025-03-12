import { Router, RequestHandler } from "express";
import { findTasks, findTaskrById, createTask, UpdateTask, DeleteTask } from "@controllers/usersControllers";
import { createRoles, DeleteRoles, findRoles, findRolesById, UpdateRoles } from "@controllers/RolesControllers";

const router = Router();

export default () => {
  /* Rutas de tareas */
  router.get("/tasks", findTasks as RequestHandler);
  router.get("/tasks/:id", findTaskrById as RequestHandler);
  router.post("/tasks", createTask as RequestHandler);
  router.put("/tasks/:id", UpdateTask as RequestHandler);
  router.delete("/tasks/:id", DeleteTask as RequestHandler);

  /* Rutas de roles */
  router.get("/roles", findRoles as RequestHandler);
  router.get("/roles/:id", findRolesById as RequestHandler);
  router.post("/roles", createRoles as RequestHandler);
  router.put("/roles/:id", UpdateRoles as RequestHandler);
  router.delete("/roles/:id", DeleteRoles  as RequestHandler);

  return router;
};
