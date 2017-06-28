import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model"
import {ActivatedRoute, Params} from '@angular/router';
import { ShoppingListService } from '../../shopping-list/shoppingList.service'
import { RecipeService } from '../recipe.service'
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:Recipe; 
id:number;
  constructor(private shopService:ShoppingListService, private router:ActivatedRoute , private recipeService:RecipeService) { }

  ngOnInit() {
   this.router.params
   .subscribe(
     (params: Params)=>{
         this.id = +params['id'];
         this.recipe = this.recipeService.getSingleRecipe(this.id)
     }
   )
  }
  sendData(){
    this.shopService.getIngredientFromRecipeDetail(this.recipe.ingredients)
  }

}
