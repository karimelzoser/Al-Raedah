import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from './recipes.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  // recipesChanged = new Subject<Recipe[]>();
  // recipeSource = new BehaviorSubject<Recipe>(null);
  // recipes$ = this.recipeSource.asObservable();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A Super-Tasty Schnitzel - Just AWESOME!',
  //     'https://www.lilvienna.com/wp-content/uploads/Pork-Schnitzel-recipe.jpg',
  //     [new Ingredients('Meat', 1), new Ingredients('Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'Melty Salty Taste',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredients('Buns', 2), new Ingredients('Meat', 1)]
  //   ),
  // ];

  public recipes: Recipe[] = [];

  constructor() {}

  // setRecipes(recipes: Recipe[]) {
  //   this.recipes = recipes;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // getRecipes() {
  //   return this.recipes.slice();
  // }

  // getRecipe(index: number) {
  //   return this.recipes[index];
  // }

  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // updateRecipe(index: number, newRecipe: Recipe) {
  //   newRecipe.id = this.recipes[index].id;
  //   this.recipes[index] = newRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
}
