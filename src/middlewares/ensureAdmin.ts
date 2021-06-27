import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepories.findOne(user_id);

  // Verificar se user é admin

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
