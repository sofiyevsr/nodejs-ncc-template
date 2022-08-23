import errorHandler from "@middlewares/errorHandler";
import routes from "@routes/index";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "./knexLogger";

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", "loopback");
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: [
      // TODO add own domains
      "https://example.com",
    ],
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (_, res) => {
  return res.status(200).send("Success");
});

app.use(routes);

app.use(errorHandler);

export default app;
