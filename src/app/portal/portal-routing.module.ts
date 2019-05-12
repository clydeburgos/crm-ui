import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from 'app/portal/components/dashboard/dashboard.component';
import { UserComponent } from 'app/portal/components/user/user.component';
import { TableComponent } from 'app/portal/components/table/table.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'table',
      component: TableComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
