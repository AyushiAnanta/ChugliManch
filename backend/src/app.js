import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import googleRoutes from "./routes/google.routes.js";

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",  // frontend URL
    credentials: true,                // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.use("/api/auth", authRoutes);
app.use("/api/google", googleRoutes);

app.use(errorMiddleware);

app.get("/debug", (req, res) => {
  res.send({ callbackURL: process.env.GOOGLE_CALLBACK_URL });
});
// http://localhost:8000/api/v1/users/register

export { app }