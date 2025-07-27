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
    const found = members.some(member => member.id === parseInt(req.params.id)); // cheking if id exists
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));  // parseInt is used to convert the req.params from string to a number  as the param is always sent as string
    } else{
        res.status(404).send(`Member with the id ${req.params.id} does not Exist`); // do this if id does not exist
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
    //res.redirect("/");  // use this on the rendered page this will return to th main page with the new member
    res.json({msg: "New Members Created Successfully", members}); // this returns json
});

// updating already existing members
router.put("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        // runing this if id is found
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                member.status = updMember.status ? updMember.name : member.status;

                res.json({msg:"Member Updated Successfuly", member});
            }else{
                    res.json({msg:"ID DOES NOT EXIST"});

            }
        });
    } else{
        res.status(404).send(`Member with the id ${req.params.id} does not Exist`);
    }
});

// deleting a user
router.delete("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id)); // cheking if id exists
    if (found) {

        res.json({msg: `Member with id ${req.params.id} has been DELETED`, members: members.filter(member => member.id !== parseInt(req.params.id))});  // parseInt is used to convert the req.params from string to a number  as the param is always sent as string
    } else{
        res.status(404).send(`Member with the id ${req.params.id} does not Exist`); // do this if id does not exist
    }
});