import SoftError from "@lib/error/softError";
import { NextFunction, Request, Response } from "express";
import request from "superagent";

/*
 * Recaptcha v3 check
 */
export default async function Recaptchaverify(
  req: Request,
  _: Response,
  next: NextFunction
) {
  try {
    const { recaptcha_token } = req.body;
    if (recaptcha_token == null || typeof recaptcha_token !== "string") {
      throw new SoftError("errors.recaptcha_fail");
    }
    const { body } = await request
      .post("https://www.google.com/recaptcha/api/siteverify")
      .send(`secret=${process.env.RECAPTCHA_SECRET_KEY}`)
      .send(`response=${recaptcha_token}`);
    if (body.success === false) throw new SoftError("recaptcha_fail");
    delete req.body.recaptcha_token;
    return next();
  } catch (err) {
    return next(err);
  }
}
