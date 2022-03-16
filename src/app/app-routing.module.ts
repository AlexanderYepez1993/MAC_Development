import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule) },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(
                routes,
                {
                  preloadingStrategy: PreloadAllModules
                }
              )
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
