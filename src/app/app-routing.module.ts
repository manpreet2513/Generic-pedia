import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './Main/Main.component';
import {HomeoneComponent} from './Pages/Home/HomeOne/HomeOne.component';
import {NotFoundComponent} from './Pages/NotFound/NotFound.component';

const AppRoutes: Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path : '',
    component : MainComponent,
    children: [
      {
        path : 'home',
        component : HomeoneComponent
      },
      // {
      //   path : 'home-two',
      //   component : HomeTwoComponent
      // },
      // {
      //   path : 'home-three',
      //   component : HomeThreeComponent
      // },
      {
        path: 'products', loadChildren: () =>
          import('./Pages/Products/Products.module').then (m => m.ProductsModule)
      },
      // {
      //   path: 'cart',
      //   component: CartComponent
      // },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'session', loadChildren: () =>
          import('./Pages/Session/Session.module').then (m => m.SessionModule)
      },
      // {
      //   path: 'checkout',loadChildren: ()=>
      //     import('./Pages/Checkout/Checkout.module').then (m => m.CheckoutModule)
      // },
      {
        path: '',loadChildren: ()=>
          import('./Pages/About/About.module').then( m=> m.AboutModule)
      },
      {
        path: 'blogs',loadChildren: ()=>
          import('./Pages/Blogs/Blogs.module').then (m => m.BlogsModule)
      },
      {
        path: 'account',loadChildren: ()=>
          import('./Pages/UserAccount/UserAccount.module').then (m => m.UserAccountModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
