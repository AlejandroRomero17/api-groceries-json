import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
  productDAO
    .getAll()
    .then((products) => res.render("../src/Views/index", { products }))
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
        ? req.json({
            message: "product not found",
          })
        : // : res.json(result);
          res.render("../src/views/edit", { product });
    })
    .catch((err) =>
      res.json({
        status: "Server unavailable",
      })
    );
};

export const insertOne = async (req, res) => {
  console.log(req.body);
  productDAO
    .insertOne(req.body)
    // .then(result => res.json({status: "Product saved successfully"}))
    .then((result) => res.redirect("/api/products/"))
    // .then((result => res.redirect('../src/views/index')))
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
        res.redirect("/api/products/");
        // await Prod
      }
    })
    .catch((err) => {
      res.json({
        status: "Server Error",
      });
    });
};

export const deleteOne = async (req, res) => {
  productDAO.deleteOne(req.params.barcode, req.body)
    .then((result) => res.redirect("/api/products"))
    // .then((result) => res.render(result))
    .catch((err) => res.json({ status: "Server unavailable" }));
};
