import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Recipe } from './recipe.model'
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('Meat',6), new Ingredient('potatoes',1)]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('Mutton',6)]),
        new Recipe('TestA', 'TestA', 'http://c8.alamy.com/comp/EXNWW6/crispy-chicken-zinger-burger-EXNWW6.jpg',[new Ingredient('chicken',6)])

    ];
    getRecipe() {
        return this.recipes.slice();
    }

    getSingleRecipe(id:number){
        return this.recipes[id]
    }
}
