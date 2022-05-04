import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { NgModule } from '@angular/core';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { TransactionComponent } from './views/pages/transaction/transaction.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgToastModule} from "ng-angular-popup";


const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgToastModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
