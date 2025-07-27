// node_modules
import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import { engine } from 'express-handlebars';

// custom_modules
import { members } from "./config/userConfig.js";
import { logger } from "./middleware/logger.js";
import { router } from "./routes/api/members.js";
import { title } from "process";

const PORT = process.env.PORT || 7070;

// file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing express
const app = express();

//Initializing express handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// initializing middleware
app.use(logger);

// initializing body parser middleware
// instead of 3rd party module express now has biult in body parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));  // this line enables the direct handling of form data

// creating endpoints 
//rendering handle bar template
app.get("/", (req, res) => {
    res.render("home",{
        title: "Member APP",
        members
    });
});

// ... setting static folder  // this will not display as home page unless line of code is moved above handlebar render
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", router );

// listen to server 
app.listen(PORT , () =>{
    console.log(`Server is active on port:  ${PORT}`);
});