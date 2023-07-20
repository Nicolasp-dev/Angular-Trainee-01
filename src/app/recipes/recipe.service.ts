import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'Test Description',
  //     'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec',
  //     [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
  //   ),
  //   new Recipe(
  //     'Second recipe',
  //     'Second Description',
  //     'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec',
  //     [new Ingredient('Beaf', 5), new Ingredient('French fries', 20)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
