import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
@Injectable()
export class HeaderComponent {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  getDataFromServer() {
    this.http.get('https://ng-recipe-book1234.firebaseio.com/recipes.json').subscribe(
      (resolve: Recipe[]) => {
         this.recipeService.storeRecipes(resolve);
      },
      (error) => console.log(error)
    );
  }
  storeDataOnServer() {
   this.http.put('https://ng-recipe-book1234.firebaseio.com/recipes.json', this.recipeService.getRecipes()).subscribe();
  }

}
