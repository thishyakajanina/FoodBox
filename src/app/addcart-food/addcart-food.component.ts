import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addcart-food',
  templateUrl: './addcart-food.component.html',
  styleUrls: ['./addcart-food.component.css']
})
export class AddcartFoodComponent implements OnInit {

  public food:FoodBoxModel;
  public id:number | undefined;
  constructor(private foodService:FoodService, private router:Router) {
    this.food=new FoodBoxModel();
   }

  
   public addcartFood(id:number){
    this.foodService.getFoodById(id).subscribe(res=>{
      this.food=new FoodBoxModel();
      this.router.navigate(['/foodsList']);
   })
  }
  ngOnInit() {
  }

}
