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
  
  { path: 'logar', 
  loadChildren: './logar/logar.module#LogarPageModule',
  canLoad: [AuthGuard] 
  },
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'frutas', loadChildren: './frutas/frutas.module#FrutasPageModule' },
  { path: 'limpeza', loadChildren: './limpeza/limpeza.module#LimpezaPageModule' },
  { path: 'laticinios', loadChildren: './laticinios/laticinios.module#LaticiniosPageModule' },
  { path: 'frios', loadChildren: './frios/frios.module#FriosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
