import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs/Subject'
export class ShoppingListService {
    public ingredientsChanged = new Subject<Ingredient[]>();
    public startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {

        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    getIngredient(index:number){
       return  this.ingredients[index];
    }

    updateIngredient(index:number, ingredient:Ingredient){
        
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
        
    }

    deleteIngredient(index:number){
        console.log(index)
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    getIngredientFromRecipeDetail(ing: Ingredient[]) {
        ing.map((ing: Ingredient) => {
            this.ingredients.push(ing)
        })
    }
}
