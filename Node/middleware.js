const express = require("express");
const app = express();
app.use(express.json()); 
const foodItems = [
  { id: 1, name: "Paneer Butter Masala", category: "Main Course", price: 250 },
  { id: 2, name: "Veg Biryani", category: "Main Course", price: 180 },
  { id: 3, name: "Chicken Biryani", category: "Main Course", price: 220 },
  { id: 4, name: "Margherita Pizza", category: "Fast Food", price: 299 },
  { id: 5, name: "Cheese Burger", category: "Fast Food", price: 150 },
  { id: 6, name: "French Fries", category: "Fast Food", price: 120 },
  { id: 7, name: "Masala Dosa", category: "South Indian", price: 90 },
  { id: 8, name: "Idli Sambar", category: "South Indian", price: 70 },
  { id: 9, name: "Chole Bhature", category: "North Indian", price: 130 },
  { id: 10, name: "Rajma Chawal", category: "North Indian", price: 140 },
  { id: 11, name: "Cold Coffee", category: "Beverage", price: 120 },
  { id: 12, name: "Chocolate Shake", category: "Beverage", price: 140 },
  { id: 13, name: "Mango Juice", category: "Beverage", price: 100 },
  { id: 14, name: "Gulab Jamun", category: "Dessert", price: 60 },
  { id: 15, name: "Rasgulla", category: "Dessert", price: 50 },
  { id: 16, name: "Ice Cream Sundae", category: "Dessert", price: 110 },
  { id: 17, name: "Hakka Noodles", category: "Chinese", price: 160 },
  { id: 18, name: "Manchurian", category: "Chinese", price: 170 },
  { id: 19, name: "Tandoori Roti", category: "Breads", price: 20 },
  { id: 20, name: "Butter Naan", category: "Breads", price: 30 }
];
app.get("/foodmenu",(req,res)=>{
        res.send(foodItems);
        
})
app.post("/admin",(req,res)=>{
        const c = "ABCDEF";
        const token = "ABCDEF"===c?1:0;
        if(token){
            foodItems.push(req.body);
            res.status(202).send("Item added succcessfully");
        }
        else{
            res.send("Error");
        }

})
app.delete("/admin/:id",(req,res)=>{
        const c = "ABCDEF";
        const token = "ABCDEF"===c?1:0;
        if(token){
                const id = parseInt(req.params.id);
                const index = foodItems.findIndex(food=> food.id===id);
                if(index===-1){
                    res.send("No item with this id"); 
                }
                else{
                    foodItems.splice(index,1);
                    res.send("Item deleted succesfully");
                }
        }
        else{
            res.send("Error cannot delete");
        }

})
const cart = [];

// Add item to cart
app.post("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const item = foodItems.find(food => food.id === id); // ✅ correct

    if (item) {
        cart.push(item);
        res.send("Item Added Successfully");
    } else {
        res.send("Item out of stock");
    }
});

// Remove item from cart
app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = cart.findIndex(item => item.id === id); // ✅ search in cart

    if (index === -1) {
        res.send("Item Not found in cart");
    } else {
        cart.splice(index, 1);
        res.send("Item deleted Successfully");
    }
});

// View cart
app.get("/user", (req, res) => {
    if(cart.length==0){
        res.send("cart is empty"); 
    }
    res.send(cart);
});
app.get("/dummy",(req,res)=>{
    try{
        JSON.parse({"Id":"1"});
        res.send("Hey there"); 
    }
    catch(error){
        res.send("Some error Occured");
    }
})

app.listen(4000,()=>{
    console.log("Listening at 4000 ");
})
