
const Product = require("../models/product")



exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render("add-product", { pageTitle: "Add Prodcut", path: "/admin/add-product", activeAddProduct: true, productCss: true, formsCss: true });
  }


exports.hostAddProdcut = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
  }


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products)=>{
        res.render('shop',{prods: products, pageTitle:'Shop', path:'/Shop', hasProducts: products.length > 0, activeShop:true, productCss: true});
    });
  }



