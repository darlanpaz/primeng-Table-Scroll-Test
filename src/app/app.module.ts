import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductService } from './productservice';

import { TableModule } from 'primeng/table';

import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    PanelModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
