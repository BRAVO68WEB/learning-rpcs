import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { rpcHandler } from "typed-rpc/express";
import statusService from "./statusService";
import morgan from "morgan";

export const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

const rpcServer = new statusService()

app.post("/api", (req: Request, res: Response, next: NextFunction)=> {
    if(req.headers.authorization !== `Bearer ${process.env.API_KEY}`) {
        return res.status(401).json({error: "Unauthorized"});
    }
    next();
}, rpcHandler(rpcServer));

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.json(rpcServer.getCurrentStatus());
});

app.get("/store", (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.query.apiKey as string;
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({error: "Unauthorized"});
    }
    res.json(rpcServer.getStore());
});

app.listen(PORT, () => {
    console.log("Listening on port 3000...");
});