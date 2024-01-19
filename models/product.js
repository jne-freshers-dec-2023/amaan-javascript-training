
const db = require('../util/database');

module.exports = class Product{
    constructor(t){
        this.id=id;     //product id
        this.title= t;  //product name
        this.imageUrl= imageUrl;   //product image link
        this.description='';  //product description
        this.price = price; //product price
    }
    save(){
       
    }


    static deleteById(id){
        
    }

    static fetchAll(){
       return db.execute('SELECT * FROM products');

    }
    static findById(id){

    }


}