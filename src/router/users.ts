import express from "express";

import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/v1/users", isAuthenticated, getAllUsers);
  router.delete("/v1/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/v1/users/:id", isAuthenticated, isOwner, updateUser);
};
