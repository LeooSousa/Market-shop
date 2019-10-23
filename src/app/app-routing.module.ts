import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./logar/logar.module').then(m => m.LogarPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then(m => m.FrutasPageModule)
  },
  {
    path: 'limpeza',
    loadChildren: () => import('./limpeza/limpeza.module').then(m => m.LimpezaPageModule)
  },
  { path: 'logar', 
  loadChildren: './logar/logar.module#LogarPageModule',
  canLoad: [AuthGuard] 
  },
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'frutas', loadChildren: './frutas/frutas.module#FrutasPageModule' },
  { path: 'limpeza', loadChildren: './limpeza/limpeza.module#LimpezaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
