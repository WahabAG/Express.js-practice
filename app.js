import express from "express";

const PORT = process.env.PORT;
// initializing express
const app = express();

// creating endpoints 

app.get("/", (req, res) => {
    res.send("Hello World");


});

// listen to server 
app.listen(PORT , () =>{
    console.log(`Server is active on port:  ${PORT}`);
});