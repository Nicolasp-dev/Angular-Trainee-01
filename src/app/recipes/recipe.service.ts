import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Test Description',
      'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec'
    ),
    new Recipe(
      'Second recipe',
      'Second Description',
      'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg?w=826&t=st=1678895314~exp=1678895914~hmac=fbd7f0129a58eddf7020125f1f80acabf1203927a6c13ce979e5e47bf62b4dec'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
