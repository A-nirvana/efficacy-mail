import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";
import dotenv from "dotenv";
dotenv.config();

export const checkAdmin: Interfaces.Middlewares.Async = async (
  req,
  _res,
  next
) => {
  try {
    const password = req.headers.authorization?.split(" ")[1];
    if (!password) {
      return next(Utils.Response.error("Password required", 401));
    }
    console.log(process.env.ADMIN_PASSWORD);
    if (password === process.env.ADMIN_PASSWORD) {
      return next();
    } else {
      return next(
        Utils.Response.error("You are not authorized to access this route", 401)
      );
    }
  } catch (error) {
    return next(Utils.Response.error("Error in authorization", 500));
  }
};
