import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {AppService} from './service/app.service';
import {PostService} from './service/post/post.service';
import {ProductService} from './service/product/product.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'post', component: PostComponent},
  { path: '',redirectTo: '/post',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only

    )
  ],
  providers: [AppService,PostService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
