import { Request, Response } from "express";
import SignupDTO from "../types/dto/signupDto";
import UserService from "../services/usersService";

export const handleSignupRequset = async (
  req: Request<any, any, SignupDTO>,
  res: Response
): Promise<void> => {
  try {
    const result = await UserService.signup(req.body);
    res.status(result.status!).json(result);
  } catch (err) {
    console.log(err)
  }
};
