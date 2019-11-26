const Cart=require('../models/cart.model')
exports.products=(req, res)=>{
    let productName=req.body.productName;
    let productDescription=req.body.productDescription;
    let productImage=req.body.productImage;
    let price=req.body.price;
    let cart=new Cart(productName, productDescription, productImage, price)
    cart.save()
    .then(data=>{
        res.status(200).json({success:true})
    })
    .catch(err=>{
        console.log(err)
    })  
}

exports.cartFetch=(req, res, next)=>{
    Cart.fetch()
    .then(product=>{
        res.status(200).
        json({data:product})
    }).catch(err=>{
        throw err;
    })
}
exports.deleteCart=(req, res , next)=>{
    let id=req.body.id;
    Cart.deleteById(id)
    .then(product=>{
        res.status(200).json({
            success: true,
            msg:"delete successfully !"
        })
    })
    .then(err=>{
        console.log(err)
    })
}
exports.updateCart=(req, res, next)=>{
    let id=req.body.id;
    let numOfProd=req.body.numOfProd;
    let priceOfProd=req.body.prodPrice;
    Cart.updateById(id, numOfProd, priceOfProd)
    .then(data=>{
        res.status(200).json({success: true, data:data})
    })
    .catch(err=>{
        throw err;
    })
}