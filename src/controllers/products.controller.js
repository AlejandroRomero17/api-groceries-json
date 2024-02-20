import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
  productDAO
    .getAll()
    .then((products) => res.json({ products }))
    .catch((err) =>
      res.json({
        status: "Server unavailable",
      })
    );
};

export const getOne = (req, res) => {
  productDAO
    .getOne(req.params.barcode)
    .then((product) => {
      !product
        ? res.json({
            message: "Product not found",
          })
        : res.json({ product });
    })
    .catch((err) =>
      res.json({
        status: "Server unavailable",
      })
    );
};

// ...

export const insertOne = async (req, res) => {
  console.log(req.body);
  productDAO
    .insertOne(req.body)
    .then((result) => res.json({ status: "Product saved successfully" }))
    .catch((err) => res.json({ status: "Server unavailable" }));
};

export const updateOne = async (req, res) => {
  console.log(req.body);
  productDAO
    .updateOne(req.params.barcode, req.body)
    .then((result) => {
      if (!result) {
        res.json({
          message: "Product not found",
        });
      } else {
        res.json({ status: "Product updated successfully" });
      }
    })
    .catch((err) => {
      res.json({
        status: "Server Error",
      });
    });
};

export const deleteOne = async (req, res) => {
  productDAO
    .deleteOne(req.params.barcode)
    .then((result) => res.json({ status: "Product deleted successfully" }))
    .catch((err) => res.json({ status: "Server unavailable" }));
};
