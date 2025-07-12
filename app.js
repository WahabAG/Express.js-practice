// node_modules
import express from "express";
import path from "path";
import {fileURLToPath} from "url";

// custom_modules
import {members}  from "./config/userConfig.js";
import { logger } from "./middleware/logger.js";

const PORT = process.env.PORT || 7070;

// file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing express
const app = express();

// initializing middleware
app.use(logger);

// creating endpoints 
// all members get
app.get("/api/members", (req,res) =>{
    res.json(members);
});

// single member get
app.get("/api/members/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));  // parseInt is used to convert the req.params from string to a number  as the param is always read as string
    } else{
        res.status(404).send("Member NOT FOIUND");
    }
});

// ... setting static folder
app.use(express.static(path.join(__dirname, "public")));


// });

// listen to server 
app.listen(PORT , () =>{
    console.log(`Server is active on port:  ${PORT}`);
});