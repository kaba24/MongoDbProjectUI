import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';


 const routes: Routes = [
 {path: '' , pathMatch: 'full' , redirectTo: 'products'},
 {path: 'products' , component: ProductListComponent}
 ];


 export {routes}
