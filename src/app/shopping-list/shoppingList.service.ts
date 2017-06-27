import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
export class ShoppingListService{
    public passData = new EventEmitter<Ingredient>()
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
 getIngredients(){
     return this.ingredients
 }
 pushData(newName:string,newAmount:number){
  const newData = new Ingredient(newName,newAmount);
  this.ingredients.push(newData);
 }
}