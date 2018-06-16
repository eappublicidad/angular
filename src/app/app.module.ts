import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HeaderComponent } from './globals/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CanastaComponent } from './globals/canasta/canasta.component';
import {appRouter} from './routing';
import { CategoriaComponent } from './pages/categoria/categoria.component';
<<<<<<< HEAD
=======
import { SliderProductoComponent } from './globals/slider/slider-producto/slider-producto.component';
import { SliderProductoItemComponent } from './globals/slider/slider-producto/slider-producto-item/slider-producto-item.component';
>>>>>>> 47e72b03b0175a951f7bc8a3cfdec6d1ff7ab304

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    CanastaComponent,
<<<<<<< HEAD
    CategoriaComponent
=======
    CategoriaComponent,
    SliderProductoComponent,
    SliderProductoItemComponent
>>>>>>> 47e72b03b0175a951f7bc8a3cfdec6d1ff7ab304
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
