import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";

export const sendMail: Interfaces.Controllers.Async = async (
  req,
  res,
  next
) => {
  try {
    const { to, subject, html } = req.body;
    await Utils.Mail.sendMail(to, html, subject);
    return res.json(Utils.Response.success("Email sent"));
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error in sending the mail"));
  }
};
