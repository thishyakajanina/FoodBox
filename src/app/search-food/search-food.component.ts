import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodBoxModel } from '../food-box-model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {

  public food:FoodBoxModel;
  public id:number | undefined;
  constructor(private foodService:FoodService, private router:Router) {
    this.food=new FoodBoxModel();
   }

  
   public getFood(id:number){
    this.foodService.getFoodById(id).subscribe(res=>{
      this.food=new FoodBoxModel();
      this.router.navigate(['/foodsList']);
   })
  }
  ngOnInit() {
  }

}
