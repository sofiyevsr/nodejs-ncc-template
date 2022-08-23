import { Response } from "express";

const responseSuccess = (res: Response, data?: Object | undefined) => {
  return res.status(200).json({
    body: data ?? {},
  });
};

const responseContentCreated = (res: Response, data?: Object | undefined) => {
  return res.status(201).json({ body: data ?? {} });
};

const responseBadRequest = (res: Response, message: string) => {
  return res.status(400).json({ message });
};
const responseAuthFail = (res: Response) => {
  return res.status(401).end();
};

const responseForbidden = (res: Response) => {
  return res.status(403).end();
};

const responseNotFound = (res: Response) => {
  return res.status(404).end();
};

const responseInternalFail = (res: Response) => {
  return res.status(500).json({
    message: "error_occured",
  });
};

export {
  responseBadRequest,
  responseContentCreated,
  responseSuccess,
  responseNotFound,
  responseForbidden,
  responseInternalFail as responseFail,
  responseAuthFail,
};
