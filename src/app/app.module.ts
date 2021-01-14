import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileannotateComponent } from './fileannotate/fileannotate.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NgxElectronModule } from 'ngx-electron';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FileannotateComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
