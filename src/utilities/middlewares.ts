import express, { NextFunction } from "express";

//https://stackoverflow.com/questions/15521876/nodejs-express-is-it-possible-to-have-case-insensitive-querystring
const lowerQueryStringKeys = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  for (const key in req.query) {
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
};

export { lowerQueryStringKeys };
