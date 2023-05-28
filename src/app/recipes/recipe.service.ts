import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Test Description',
      'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
    ),
    new Recipe(
      'Second recipe',
      'Second Description',
      'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec',
      [new Ingredient('Beaf', 5), new Ingredient('French fries', 20)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
