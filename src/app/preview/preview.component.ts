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
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls:['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  image:any;
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
    this.salad = '~/assets/images/4_salad.png'
  }

 

  back(){
    this.router.back();
  }
}
