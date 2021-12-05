import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.components';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { AddcartFoodComponent } from './addcart-food/addcart-food.component';
import { PaymentComponent } from './payment/payment';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'loginsuccess', component:LoginsuccessComponent},
{path:'login', component:LoginComponent},
{path:'registration', component:RegistrationComponent},
{path:'payment',component:PaymentComponent},

{path:'addFood', component:AddFoodComponent},
{path:'updateFood', component:UpdateFoodComponent},
{path:'deleteFood', component:DeleteFoodComponent},
{path:'searchFood', component:SearchFoodComponent},
{path:'foodsList', component:FoodsListComponent},
{path:'addcartfood',component:AddcartFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
