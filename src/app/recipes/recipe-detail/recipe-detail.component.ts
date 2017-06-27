import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model"
import { ShoppingListService } from '../../shopping-list/shoppingList.service'
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:Recipe; 
  constructor(private shopService:ShoppingListService) { }

  ngOnInit() {
  }
  sendData(){
    this.shopService.getIngredientFromRecipeDetail(this.recipe.ingredients)
  }

}
