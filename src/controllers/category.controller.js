const Category = require('../models/Category')

const postCategory = async (req, res) => {

    
    try {
        
        const category =  new Category (req.body)
        const categorySave = await category.save()
        
        res.status(200).json(categorySave)
    } catch (error) {
        console.log(error)
    }
}

const getFilterbyQuery = async (req, res) => {

    //en breve
}



module.exports = {
    getFilterbyQuery,
    postCategory
}