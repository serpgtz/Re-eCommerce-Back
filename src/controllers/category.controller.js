const Category = require('../models/Category')

const postCategory = async (req, res) => {
    try {

        const category = new Category(req.body)
        const categorySave = await category.save()
        return res.status(200).json(categorySave)
    } catch (error) {
        console.log(error)
    }
}

const getBrand = async (req, res) => {
    try {
        let newArrayBrand = []
        categoryHeadphones.map(e => {
            for (let i = 0; i < brand.length; i++) {
                if (brand[i] === e.brand) newArrayBrand.push(e) // return¿?
            }
        })
        return res.status(200).json(newArrayBrand)
    } catch (error) {
        console.log(error)
    }

}

const getFilterbyQuery = async (req, res) => {
    const {
        brand, model, cell, phoneCover, headphones,
        charger, screen, freeShipping, ram, storagessd,
        systemOp, onSale
    } = req.body

    //funcion para filtrar freeshiping y onsale que se repiten en varios patrones de busqueda
    function freeShippingAndOnSale(freeShipping, onSale, array) {
        if (freeShipping) {
            array = array.filter(e => e.freeShipping === true)
        }
        if (onSale) {
            array = array.filter(e => e.onSale === true)
        }
        return array;
    }

    function forCellandBrand(model, charger, screen, ram, storagessd, systemOp, array) {
        if (model) {
            array = array.filter(e => e.model === model)
        }
        if (charger && array.length > 0) {
            array = array.filter(e => e.charger === true)
        }
        if (screen && array.length > 0) {
            array = array.filter(e => e.screen === screen)
        }
        if (ram && array.length > 0) {
            array = array.filter(e => e.ram === ram)
        }
        if (storagessd && array.length > 0) {
            array = array.filter(e => e.storagessd === storagessd)
        }
        if (systemOp && array.length > 0) {
            array = array.filter(e => e.systemOp === systemOp)
        }
        return array;
    }
    // Propiedades en comun, brand -- ¡¿model?! -- freeShipping -- onSale
    try {
        if (phoneCover) { // false headphones and cell¿?
            console.log('if phoneCover')
            let categoryPhoneCover = await Category.find({ case: true })
            categoryPhoneCover = freeShippingAndOnSale(freeShipping, onSale, categoryPhoneCover)
            return res.status(200).json(categoryPhoneCover)

        }
        else if (headphones) { // false phoneCover and cell¿?
            console.log('if HEADPHONE')
            let categoryHeadphones = await Category.find({ headphones: true })
            categoryHeadphones = freeShippingAndOnSale(freeShipping, onSale, categoryHeadphones)
            if (brand.length > 0) {
                let newArrayBrand = []
                categoryHeadphones.map(e => {
                    for (let i = 0; i < brand.length; i++) {
                        if (brand[i] === e.brand) newArrayBrand.push(e) // return¿?
                    }
                })
                return res.status(200).json(newArrayBrand)
            }
            return res.status(200).json(categoryHeadphones)
            // un ordenamiento por marcas y cell por defecto¿?

        } else if (cell) { // false phoneCover and headphones ¿?
            let categoryCell = await Category.find({ cell: true })
            categoryCell = freeShippingAndOnSale(freeShipping, onSale, categoryCell)
            categoryCell = forCellandBrand(model, charger, screen, ram, storagessd, systemOp, categoryCell)
            console.log(categoryCell)
            if (brand.length > 0) {
                let newArrayBrand = []
                categoryCell.map(e => {
                    for (let i = 0; i < brand.length; i++) {

                        if (brand[i] === e.brand) newArrayBrand.push(e) // return¿?
                    }
                })
                if (newArrayBrand.length > 0) return res.status(200).json(newArrayBrand)
                else return res.status(200).json("sin marcas")
            }
            return res.status(200).json(categoryCell)
        }
        else if (brand.length > 0) {
            let brandFilter = []
            for (let i = 0; i < brand.length; i++) {
                let array = await Category.find({ brand: brand[i] })
                array.map(e => brandFilter.push(e))
            }
            brandFilter = freeShippingAndOnSale(freeShipping, onSale, brandFilter)
            brandFilter = forCellandBrand(model, charger, screen, ram, storagessd, systemOp, brandFilter)
            return res.status(200).json(brandFilter)
        } else {
            const allCategory = await Category.find({})
            return res.status(200).json(allCategory)
        }
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

module.exports = {
    getFilterbyQuery,
    postCategory,
    getBrand,
}