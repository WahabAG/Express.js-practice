import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const PORT = process.env.PORT;

// file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing express
const app = express();

// creating endpoints 
// 1 setting static folder
app.use(express.static(path.join(__dirname, "public")));


// });

// listen to server 
app.listen(PORT , () =>{
    console.log(`Server is active on port:  ${PORT}`);
});