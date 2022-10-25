import { Injectable } from "@angular/core";
import { FoodModel } from './../models/food.model'
import { CartegoryModel } from './../models/cartegory.model'
import { FavouriteModel } from './../models/favourites.model'

@Injectable({
    providedIn: "root"
})
export class FoodService{

    foodArray:FoodModel[]=[
        {id:1,cartegory:6,name:'Cheese Burger',description:'Spicy',price:500,currency:'Ksh/=',like:false,image:'~/assets/images/cheeseburger.jpeg'},
        {id:2,cartegory:6,name:'Fries',description:'Deep Fried',price:100,currency:'Ksh/=',like:true,image:'~/assets/images/fries.jpeg'},
        {id:3,cartegory:6,name:'Hot-Dogs',description:'Grilled',price:150,currency:'Ksh/=',like:false,image:'~/assets/images/hotdogs.jpeg'},
        {id:4,cartegory:6,name:'Fried Chicken',description:'Deep Fried',price:450,currency:'Ksh/=',like:true,image:'~/assets/images/friedchicken.jpeg'},
        {id:5,cartegory:6,name:'Platter',description:'With salad',price:600,currency:'Ksh/=',like:false,image:'~/assets/images/platter.jpeg'}, 
       
    ]

    sandwiches:FoodModel[]=[
        {id:20,cartegory:9,name:'Eggs Sandwich',description:'Fried eggs',price:200,currency:'Ksh/=',like:false,image:'~/assets/images/sandwich/eggsandwich.jpeg'},
        {id:21,cartegory:9,name:'Chicken Sandwich',description:'Grilled',price:350,currency:'Ksh/=',like:true,image:'~/assets/images/sandwich/chikensandwich.jpeg'},
        {id:22,cartegory:9,name:'Bacon Sandwich',description:'Grilled',price:250,currency:'Ksh/=',like:false,image:'~/assets/images/sandwich/baconsandwich.jpeg'},
        {id:23,cartegory:9,name:'Vegetarian Sandwich',description:'Healthy',price:100,currency:'Ksh/=',like:true,image:'~/assets/images/sandwich/vegetariansandwich.webp'},
    ]

    pasta:FoodModel[]=[
        {id:24,cartegory:10,name:'Brown pasta',description:'Pasta',price:200,currency:'Ksh/=',like:false,image:'~/assets/images/pasta/brownpasta.jpg'},
        {id:25,cartegory:10,name:'Macarroni',description:'Pasta',price:350,currency:'Ksh/=',like:true,image:'~/assets/images/pasta/macarroni.jpg'},
        {id:26,cartegory:10,name:'Noodles',description:'Pasta',price:250,currency:'Ksh/=',like:false,image:'~/assets/images/pasta/noodles.jpg'},
        {id:27,cartegory:10,name:'Pasta with meat balls',description:'Pasta',price:240,currency:'Ksh/=',like:true,image:'~/assets/images/pasta/pasta&meatballs.jpg'},
        {id:28,cartegory:10,name:'pasta with Shrimp',description:'Pasta',price:300,currency:'Ksh/=',like:true,image:'~/assets/images/pasta/shrimp&pasta.jpg'},
        {id:29,cartegory:10,name:'White pasta',description:'Pasta',price:200,currency:'Ksh/=',like:true,image:'~/assets/images/pasta/whitepasta.jpg'}
    ]

    snacks:FoodModel[]=[
        {id:30,cartegory:11,name:'Brown Cookies',description:'Cookies',price:200,currency:'Ksh/=',like:false,image:'~/assets/images/snacks/browncookies.jpg'},
        {id:31,cartegory:11,name:'Chocolate Cookies',description:'Cookies',price:350,currency:'Ksh/=',like:true,image:'~/assets/images/snacks/chocolatecookies.jpg'},
        {id:32,cartegory:11,name:'Cookies',description:'Cookies',price:250,currency:'Ksh/=',like:false,image:'~/assets/images/snacks/cookies.jpg'},
        {id:33,cartegory:11,name:'Milk Biscuits',description:'Cookies',price:240,currency:'Ksh/=',like:true,image:'~/assets/images/snacks/milkbiscuits.jpg'},
        {id:34,cartegory:11,name:'Nachos',description:'Chips',price:300,currency:'Ksh/=',like:true,image:'~/assets/images/snacks/nachos.jpg'},
        {id:35,cartegory:11,name:'Pasty Cookies',description:'Chips',price:200,currency:'Ksh/=',like:true,image:'~/assets/images/snacks/pastycookies.jpg'},
        {id:36,cartegory:11,name:'Potato Chips',description:'Chips',price:200,currency:'Ksh/=',like:true,image:'~/assets/images/snacks/potatochips.jpg'}
    ]

    african:FoodModel[]=[
        {id:37,cartegory:12,name:'Chapati',description:'East African food',price:200,currency:'Ksh/=',like:false,image:'~/assets/images/african/chapati.jpeg'},
        {id:38,cartegory:12,name:'Fufu',description:'West African food',price:350,currency:'Ksh/=',like:true,image:'~/assets/images/african/fufu.jpeg'},
        {id:39,cartegory:12,name:'Mukimo',description:'East African food',price:250,currency:'Ksh/=',like:false,image:'~/assets/images/african/mukimo.jpeg'},
        {id:40,cartegory:12,name:'Pilau',description:'East African food',price:240,currency:'Ksh/=',like:true,image:'~/assets/images/african/pilau.jpeg'},
        {id:41,cartegory:12,name:'Roasted Meat Plantains',description:'African food',price:300,currency:'Ksh/=',like:true,image:'~/assets/images/african/plantains&meat.jpeg'},
        {id:42,cartegory:12,name:'Ugali',description:'African',price:200,currency:'Ksh/=',like:true,image:'~/assets/images/african/ugali.jpeg'}
    ]

    cartegoryArray:CartegoryModel[]=[
        {id:6,name:'Fast Food',description:'Fast Food',like:false,image:'~/assets/images/cheeseburger.jpeg', active:true},
        {id:9,name:'Sandwiches',description:'Sandwiches',like:false,image:'~/assets/images/sandwich/chikensandwich.jpeg', active:false},
        {id:10,name:'Pastas',description:'Pastas',like:false,image:'~/assets/images/pasta/whitepasta.jpg', active:false},
        {id:11,name:'Snacks',description:'Snacks',like:false,image:'~/assets/images/snacks/browncookies.jpg', active:false},
        {id:12,name:'African cuisine',description:'African cuisine',like:false,image:'~/assets/images/african/mukimo.jpeg', active:false},
        {id:13,name:'American cuisine',description:'American cuisine',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:14,name:'Italian cuisine',description:'Italian cuisine',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:15,name:'Main Foodies',description:'Main Foodies',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:16,name:'Deserts',description:'Deserts',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:17,name:'Beverages',description:'Beverages',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:18,name:'Healthy',description:'Healthy',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
        {id:19,name:'Fruits',description:'fruits',like:false,image:'~/assets/images/cheeseburger.jpeg', active:false},
    ]

    favouriteArray:FavouriteModel[]=[
        {id:7,name:'Platter',description:'With salad',image:'~/assets/images/platter.jpeg',rate:3},
        {id:8,name:'Fried Chicken',description:'Deep Fried',image:'~/assets/images/friedchicken.jpeg',rate:4},
        {id:7,name:'Cheese Burger',description:'Spicy',image:'~/assets/images/cheeseburger.jpeg',rate:1}
    ]
}