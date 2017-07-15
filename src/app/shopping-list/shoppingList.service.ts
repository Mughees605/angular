import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs/Subject'
export class ShoppingListService{
    public ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
 getIngredients(){
     return this.ingredients.slice();
 }
 addIngredient(ing:Ingredient){

     this.ingredients.push(ing);
     this.ingredientsChanged.next(this.ingredients.slice());
 }
 getIngredientFromRecipeDetail(ing:Ingredient[]){
     ing.map((ing:Ingredient)=>{
         this.ingredients.push(ing)
     })
 }
}
