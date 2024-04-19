import express from "express";

import { getUsers, deleteUserById, updateUserById } from "../models/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const safeUser = {
      username,
    };

    const updatedUser = await updateUserById(id, safeUser);

    return res.status(200).json(updatedUser).end();
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
