import Recaptchaverify from "@middlewares/recaptchaVerify";
import { responseContentCreated, responseSuccess } from "@responses";
import AuthController from "@controllers/auth";
import { Router } from "express";

const r = Router();

r.post("/login", Recaptchaverify, async (req, res, next) => {
  try {
    await AuthController.login(req, res);
    return responseSuccess(res);
  } catch (error) {
    return next(error);
  }
});

r.post("/register", Recaptchaverify, async (req, res, next) => {
  try {
    await AuthController.register(req, res);
    return responseContentCreated(res);
  } catch (e) {
    return next(e);
  }
});

export default r;
