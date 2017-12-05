import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
