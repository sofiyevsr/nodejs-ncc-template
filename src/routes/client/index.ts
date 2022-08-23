import { Router } from "express";
import auth from "./auth";

const r = Router();

r.use("/auth", auth);

export default r;
