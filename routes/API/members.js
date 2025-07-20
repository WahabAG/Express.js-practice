import express from "express";
import { v4 as uuidv4 } from "uuid";
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
        res.status(404).send(`Member with the id ${req.params.id} does not Exist`);
    }
});

// Creating Members
router.post("/", (req, res) =>{
    const newMember = {
        id : uuidv4(),
        name : req.body.name,
        email : req.body.email,
        status: req.body.status
    };

    if (!newMember.name || !newMember.email){
        return res.status(400).json({msg : "Name and Email is required"});
    }

    members.push(newMember);
    res.json({msg: "New Members Created Successfully", members});
});