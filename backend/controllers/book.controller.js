let Book = require('../models/book');



const getBooks =((req,res) => {
    Book.find({})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({msg: err}))
})

const getBook =((req,res) => {
    Book.findOne({_id: req.params.bookID})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json({msg: 'Book not found'}))
})

const createBook =((req,res) => {
    console.log(req.body);
    Book.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({msg: err}))
})

const updateBook =((req,res) => {
    console.log(req.body);
    if(!req.body){
        return res.status(400).send({msg:'data can not be empty'});
    }
    const id =req.params.bookID;
    Book.findOneAndUpdate(id, req.body,{useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message:'connot update'
                });
            }
            else res.send({msg:"book updated"});
        })
        .catch(err => res.status(500).send({msg:"error updating book"}));
})


const deleteBook =((req,res) => {
    Book.findOneAndDelete({_id: req.params.bookID})
    .then(data => {
        if(!data){
            res.status(404).send({
                message:'book not found'
            });
        }
        else res.send({msg:"book deleted"});
    })
    .catch(err => res.status(500).send({msg:"error deleting book"}));


    /*
        .then(result => res.status(200).send({msg:"book deleted"}))
        .catch(err => res.status(404).json({msg: 'Book not fount'}))
        */
})



module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}
