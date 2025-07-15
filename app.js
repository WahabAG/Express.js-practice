// node_modules
import express from "express";
import path from "path";
import {fileURLToPath} from "url";

// custom_modules
import { logger } from "./middleware/logger.js";
import { router } from "./routes/api/members.js";

const PORT = process.env.PORT || 7070;

// file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing express
const app = express();

// initializing middleware
app.use(logger);

// creating endpoints 

// ... setting static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", router );

// listen to server 
app.listen(PORT , () =>{
    console.log(`Server is active on port:  ${PORT}`);
});