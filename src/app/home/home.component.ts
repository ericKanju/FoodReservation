import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, EventData, isAndroid, Observable, Page, View } from '@nativescript/core'
import { FoodService} from './../services/food.service'
import { CartegoryModel } from '../models/cartegory.model';
import { FoodModel } from '../models/food.model';
import { FavouriteModel } from '../models/favourites.model';
import { RouterExtensions } from '@nativescript/angular';
const BASE_COLOR = '#FEC107';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ratingStars:any[]=[1,2,3,4,5];
  cartegories:CartegoryModel[]=[];
  food:FoodModel[]=[];
  favourites:FavouriteModel[]=[];
  hover:any='grid';

  constructor(
    private page:Page,
    private foodService:FoodService,
    private router:RouterExtensions
  ) {
    page.actionBarHidden=true;
    if (isAndroid) {
      this.page.androidStatusBarBackground = new Color(BASE_COLOR);
  }

  this.reload();
  this.cartegories = foodService.cartegoryArray;
  this.food = foodService.foodArray;
  this.favourites = foodService.favouriteArray;
  for(let i=0;i<this.cartegories.length;i++){
    this.cartegories[i].active=false;
    if(i==0){
      this.cartegories[i].active=true
    }
  }
  }

  switchCartegory(args){
    for(let i=0;i<this.cartegories.length;i++){
      this.cartegories[i].active=false;
      if(this.cartegories[i].id==args){
        this.cartegories[i].active=true
      }
    }
    if(args==6){
      this.food = this.foodService.foodArray;
    }
    if(args==9){
      this.food = this.foodService.sandwiches;
    }
    if(args==10){
      this.food = this.foodService.pasta;
    }
    if(args==11){
      this.food = this.foodService.snacks;
    }
    if(args==12){
      this.food = this.foodService.african;
    }
  }

  ngOnInit(): void {
  }

  loadingImages(args:EventData){
    const view = <View>args.object;

    const vm = new Observable();
    vm.set("imageUri", "~/images/friedchicken.png");
    view.bindingContext = vm;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  likeFood(index){
    console.log(index)
    for(let i=0; i<this.food.length; i++){
      if(index==i){
        this.food[i].like=!this.food[i].like;
      }
    }
  }

  openDec(){
    this.router.navigate(['/preview'])
  }

  reload(){
    this.hover='grid';
  }
  
  openCart(){
    this.hover='cart';
    this.router.navigate(['/cart']);
  }

  openBrowse(){
    this.router.navigate(['/browse']);
  }









}
