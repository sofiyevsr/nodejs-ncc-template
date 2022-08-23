import { Router } from "express";
import client from "./client/index";

const r = Router();

r.use("/client", client);

export default r;
