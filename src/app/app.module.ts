import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestIfComponent } from './test-if/test-if.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestIfElseComponent } from './test-if-else/test-if-else.component';
import { TestForComponent } from './test-for/test-for.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';
import { TestNGClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';

@NgModule({
  declarations: [	
    AppComponent,
    TestIfComponent,
    MenuComponent,
    TestIfElseComponent,
    TestForComponent,
    TestSwitchComponent,
    TestNGClassComponent,
      TestNgStyleComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
