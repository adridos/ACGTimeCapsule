import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { CardsComponent } from './cards/cards.component';
import { ItemOutputComponent } from './item-output/item-output.component';

const Routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'new-entry', component: NewEntryComponent},
    { path: 'all-entries', component: AllEntriesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewEntryComponent,
    FooterComponent,
    HeaderComponent,
    AllEntriesComponent,
    CardsComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
    
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }