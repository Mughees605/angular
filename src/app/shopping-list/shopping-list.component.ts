import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shoppingList.service'
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/subscription'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients()
    this.subscription = this.shoppingService.ingredientsChanged
      .subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients
          }
        )
      }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
