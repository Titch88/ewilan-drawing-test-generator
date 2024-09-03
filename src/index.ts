import express, { Request, Response } from "express";
import Error from "./types/error"

const app = express();

const PORT = 3000;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error:Error) => {
  // gracefully handle error
  throw new Error(error.message);
});