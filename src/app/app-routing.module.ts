import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
// import { RecipesUrlsComponent } from './recipes/recipes-list/recipes-urls/recipes-urls.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FactoryProjComponent } from './recipes/factory/factory-proj/factory-proj.component';
import { FactoryCardComponent } from './recipes/factory/factory-card/factory-card.component';

const appRoute: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'not',
    component: NotFoundComponent,
  },

  {
    path: 'blogs',
    component: FactoryProjComponent,
  },

  {
    path: 'blogs/:name/:id',
    component: FactoryCardComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
