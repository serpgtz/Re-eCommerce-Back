const Product = require("../models/Product");

const postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const productSave = await product.save();

    return res.status(200).json(productSave);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  const { name, page, limit, price, rating, description } = req.query;
  try {
    if (page <= 0) {
      return res.status(500).json({
        error: true,
        msg: "El paginado te odia porque le pasaste 0 menos",
      });
    }
    if (page > 0 && limit) {
      const products = await Product.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await Product.countDocuments();
      return res.status(200).json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    }

    if (name) {
      const productQuery = await Product.find({
        name: { $regex: name, $options: "i" },
      });

      if (productQuery.length > 0) return res.status(200).json(productQuery);
      else
        return res
          .status(404)
          .json({ error: true, msg: "producto no encontrado" });
    }
    if (description) {
      const productQuery = await Product.find({
        description: { $regex: description, $options: "i" },
      });

      if (productQuery.length > 0) return res.status(200).json(productQuery);
      else
        return res
          .status(404)
          .json({ error: true, msg: "producto no encontrado" });
    }
    if (price) {
      const products = await Product.find();
      if (price === "asc") {
        const productQuery = products.sort((a, b) => a.price - b.price);
        return res.status(200).json(productQuery);
      }
      if (price === "dsc") {
        const productQuery = products.sort((a, b) => b.price - a.price);
        return res.status(200).json(productQuery);
      }
    }
    if (rating) {
      const products = await Product.find();
      if (rating === "asc") {
        const productQuery = products.sort((a, b) => a.rating - b.rating);
        return res.status(200).json(productQuery);
      }
      if (rating === "dsc") {
        const productQuery = products.sort((a, b) => b.rating - a.rating);
        return res.status(200).json(productQuery);
      }
    }

    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { _id, name, price, description, stock, image } = req.body;
  try {
    const productMatch = await Product.findById(_id);
    productMatch.name = name;
    productMatch.price = price;
    productMatch.description = description;
    productMatch.stock = stock;
    productMatch.image = image;
    const update = await productMatch.save();

    return res.status(200).json(update);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const _id = req.params.id;

  try {
    // no se elimina de la bdd pero si tendra la propiedad existe : false
    const productMatch = await Product.findById(_id);

    productMatch.exists = false;

    const update = await productMatch.save();
    return res.status(200).json(update);
  } catch (error) {
    console.log(error);
  }
};

const getProductId = async (req, res) => {
  try {
    const productMatch = await Product.findById(req.params.id);
    return res.status(200).json(productMatch);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductId,
};
