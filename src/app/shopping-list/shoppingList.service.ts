import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
export class ShoppingListService{
    public ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
 getIngredients(){
     return this.ingredients.slice();
 }
 addIngredient(ing:Ingredient){
     this.ingredients.push(ing);
 }
 getIngredientFromRecipeDetail(ing:Ingredient[]){
     ing.map((ing:Ingredient)=>{
         this.ingredients.push(ing)
     })
 }
}
