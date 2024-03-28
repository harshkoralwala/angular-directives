import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIfComponent } from './test-if/test-if.component';
import { MenuComponent } from './menu/menu.component';
import { TestIfElseComponent } from './test-if-else/test-if-else.component';
import { TestForComponent } from './test-for/test-for.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';
import { TestNGClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';

const routes: Routes = [
  { path: 'ngif', component: TestIfComponent },
  { path: 'ngifelse', component: TestIfElseComponent },
  { path: 'ngfor', component: TestForComponent },
  { path: 'ngswitch', component: TestSwitchComponent },
  { path: 'ngclass', component: TestNGClassComponent },
  { path: 'ngstyle', component: TestNgStyleComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: '/menu', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
