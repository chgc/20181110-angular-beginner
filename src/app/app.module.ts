import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { StateFilterPipe } from './state-filter.pipe';

@NgModule({
  declarations: [AppComponent, FooterComponent, StateFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
