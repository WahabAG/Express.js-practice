import express from "express";
import { members } from "../../config/userConfig.js";
export const router = express.Router();

// all members get
router.get("/", (req,res) =>{
    res.json(members);
});


// single member get
router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));  // parseInt is used to convert the req.params from string to a number  as the param is always sent as string
    } else{
        res.status(404).send("Member NOT FOIUND");
    }
});