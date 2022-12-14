import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, EventData, isAndroid, Observable, Page, View } from '@nativescript/core'
import { FoodService} from '../services/food.service'
import { CartegoryModel } from '../models/cartegory.model';
import { FoodModel } from '../models/food.model';
import { FavouriteModel } from '../models/favourites.model';
import { RouterExtensions } from '@nativescript/angular';
const BASE_COLOR = '#f3f3f3';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls:['./cart.component.scss']
})
export class CartComponent implements OnInit {

  image:any;
  image2:any;
  salad:any;
  chilli:any='~/assets/images/2_chilli.png';
  ketchup:any='~/assets/images/1_ketchup.png';
  mayonise:any='~/assets/images/3_mayonise.png';

  constructor(
    private page:Page,
    private foodService:FoodService,
    private router:RouterExtensions
  ) {
    page.actionBarHidden=true;
    if (isAndroid) {
      this.page.androidStatusBarBackground = new Color(BASE_COLOR);
  }

  }

  ngOnInit(): void {
    this.image = '~/assets/images/cheeseburger.png'
    this.image2 = '~/assets/images/fries.jpeg'
    this.salad = '~/assets/images/4_salad.png'
  }

  openHome(){
    this.router.navigate(['/home'])
  }

  back(){
    this.router.back();
  }

  openBrowse(){
    this.router.navigate(['/browse']);
  }

}
