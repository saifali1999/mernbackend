const express = require('express');
const router = express.Router();

const Register = require('../models/Register');

// Create a new work
router.post('/register', async (req, res) => {
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){

            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword,
            })

            const registered = await registerEmployee.save();
            res.status(201).send(registered);

        }else{
            res.send("password is not matching")
        }

    }catch(error){
        res.status(400).send(error)
    }
});


module.exports = router;
