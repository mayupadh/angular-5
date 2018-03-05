import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
                          {
                            path: '',
                            redirectTo: '/home',
                            pathMatch: 'full'
                          },
                          {
                            path: 'home',
                            component: HomeComponent
                          },
                          {
                              path: '',
                              redirectTo: '/about',
                              pathMatch: 'full'
                            },
                            {
                              path: 'about',
                              component: AboutComponent
                            }
                        ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
