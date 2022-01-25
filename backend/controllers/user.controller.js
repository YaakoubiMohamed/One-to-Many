let User = require('../models/user');



const getUsers =((req,res) => {
    User.find({})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({msg: err}))
})

const getUser =((req,res) => {
    User.findOne({_id: req.params.userID})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json({msg: 'User not found'}))
})

const createUser =((req,res) => {
    console.log(req.body);
    User.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({msg: err}))
})

const updateUser =((req,res) => {
    console.log(req.body);
    if(!req.body){
        return res.status(400).send({msg:'data can not be empty'});
    }
    const id =req.params.userID;
    User.findOneAndUpdate(id, req.body,{useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message:'connot update'
                });
            }
            else res.send({msg:"user updated"});
        })
        .catch(err => res.status(500).send({msg:"error updating user"}));
})


const deleteUser =((req,res) => {
    User.findOneAndDelete({_id: req.params.userID})
    .then(data => {
        if(!data){
            res.status(404).send({
                message:'user not found'
            });
        }
        else res.send({msg:"user deleted"});
    })
    .catch(err => res.status(500).send({msg:"error deleting user"}));


    /*
        .then(result => res.status(200).send({msg:"user deleted"}))
        .catch(err => res.status(404).json({msg: 'User not fount'}))
        */
})



module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
