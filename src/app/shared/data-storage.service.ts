import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipes.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}
  private toggling = new BehaviorSubject('false');
  private graph = new BehaviorSubject('');
  private audio = new BehaviorSubject('IVR شركة الرائدة الكبرى.wav');
  audioPlay;
  private showing = new BehaviorSubject('false');
  getInfo(): Observable<string> {
    return this.toggling.asObservable();
  }

  getInfoValue(): string {
    return this.toggling.getValue();
  }

  setInfo(val: string) {
    this.toggling.next(val);
  }

  getGraph(): Observable<string> {
    return this.graph.asObservable();
  }
  setGraph(val: string) {
    this.graph.next(val);
  }

  getAudio(): Observable<string> {
    return this.audio.asObservable();
  }

  setAudio(val: string) {
    this.audio.next(val);
    this.audioPlay?.pause();
    console.log(this.audio);
    this.audioPlay = new Audio(`assets/Audios/${this.audio.value}`);
    console.log(this.audioPlay);
    this.audioPlay?.play();
  }

  getShow(): Observable<string> {
    return this.showing.asObservable();
  }

  getShowValue(): string {
    return this.showing.getValue();
  }

  setShow(val: string) {
    this.showing.next(val);
  }

  // getPatients() {
  //   return this.http.get<Recipe>('http:/localhost//fetch_all.php');
  // }

  // storeRecipe() {
  //   const recipes = this.recipeService.getRecipes();
  //   this.http
  //     .put(
  //       'https://recipe-book-31db7-default-rtdb.firebaseio.com/recipes.json',
  //       recipes
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // fetchRecipe() {
  //   return this.http
  //     .get<Recipe[]>(
  //       'https://recipe-book-31db7-default-rtdb.firebaseio.com/recipes.json'
  //     )
  //     .pipe(
  //       map((recipes) => {
  //         return recipes.map((recipe) => {
  //           return {
  //             ...recipe,
  //           };
  //         });
  //       }),
  //       tap((recipes) => {
  //         this.recipeService.setRecipes(recipes);
  //       })
  //     );
  // }
}
