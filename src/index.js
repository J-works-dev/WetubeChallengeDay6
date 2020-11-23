import express from "express";
import path from "path";
import router from "./router";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

app.use(localsMiddleware);
// app.use((req, res, next) => {
//   res.locals.siteName = "Sexy Site";
//   next();
// });

app.use("/", router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
