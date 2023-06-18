import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "../server/schema/schema.js";
import colors from "colors";
import connect from "./config/db.js";

const port = process.env.PORT || 8080;

dotenv.config();
const app = express();

connect();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, 
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
