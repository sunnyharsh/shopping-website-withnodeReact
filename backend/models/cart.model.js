const mongodb=require('mongodb');
const getDb=require('../config/database').getDb;
class Cart{
    constructor(productName, productDescription, productImage, price){
        this.productName=productName;
        this.productDescription=productDescription;
        this.productImage=productImage;
        this.price=price
        this.numberOfItem=1
    }
    save(){
        let db=getDb();
        let dbOp;
        return db.collection('Cart').find({productName:this.productName})
        .next()
        .then(data=>{
            if(data){
                let num= data.numberOfItem+1;
                return db.collection('Cart')
                    .updateOne({productName:this.productName},{$set:{numberOfItem:num, price: num * this.price}})
                    .then(data=>{
                        return data
                    }).catch(err=>{
                        console.log(err)
                    })
            }
            else{
                dbOp= db.collection('Cart').insertOne(this)
                return dbOp.then(result=>{
                    return result;
                }).catch(err=>{
                     console.log(err)
                })
            }
            
            return data
        })
        .catch(err=>{
            console.log(err)
        })
       
    }
    static fetch(){
        let db=getDb();
        return db.collection('Cart').find()
        .toArray()
        .then(products=>{
            return products
        })
        .catch(err=>{
            console.log(err, "err")
        });
    }
    static deleteById(prodId){
        let db=getDb();
        return db.collection("Cart").deleteOne({_id:new mongodb.ObjectID(prodId)})
        .then(result=>{
            //after deletion a date call fetch data for fetch all data from db
            return
        })
        .catch(err=>{
            throw err;
        })
    }
    static updateById(prodId , numOfProd, priceOfProd){
         let db=getDb();
          return db.collection('Cart').find({_id: new mongodb.ObjectID(prodId)})
         .next()
         .then(data=>{
             let oneItemPrice=parseFloat(data.price)/parseInt(data.numberOfItem)
             let price1= oneItemPrice * numOfProd;
             if(data){
                 return db.collection('Cart')
                 .updateOne({_id: new mongodb.ObjectID(prodId)},{$set:{numberOfItem:numOfProd, price: price1}})
                 .then(result=>{
                     return result;
                 }).catch(err=> console.log(err))
             }
         }).catch(err=>{
             console.log(err)
         })
       
           
    }
}
module.exports=Cart;