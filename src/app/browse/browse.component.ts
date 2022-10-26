import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { ActivityIndicator, Application, Color, EventData, isAndroid, Observable, Page, View } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular';
import { CartegoryModel } from '../models/cartegory.model';
import { FavouriteModel } from '../models/favourites.model';
import { FoodModel } from '../models/food.model';
import { FoodService } from '../services/food.service';
const BASE_COLOR = '#FEC107';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
  styleUrls:['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

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
    this.isBusy = false;
  }

  openCart(){
    this.hover='cart';
    this.router.navigate(['/cart']);

  }

  openHome(){
    this.router.navigate(['/home'])
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

  isBusy: boolean = false;

  onBusyChanged(args: EventData) {
      let indicator: ActivityIndicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }

  navigating(args){
    this.isBusy = true;

    setTimeout(() =>{
      if(args=='home'){
        this.router.navigate(['/home']);
      }
      if(args=='cart'){
        this.router.navigate(['/cart']);
      }

     }, 10);

  }
}
