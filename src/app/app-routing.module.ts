import { TestComponent } from './test/test.component';
import { TestModule } from './test/test/test.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'test',
    component: TestComponent,
    loadChildren: () => import('../app/test/test/test.module').then(m => m.TestModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
