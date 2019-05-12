import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'app/shared/sidebar/sidebar.module';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { FixedPluginModule } from 'app/shared/fixedplugin/fixedplugin.module';
import { DashboardComponent } from 'app/portal/components/dashboard/dashboard.component';
import { UserComponent } from 'app/portal/components/user/user.component';
import { TableComponent } from 'app/portal/components/table/table.component';
import { AuthenticationRoutingModule } from 'app/auth/authentication-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserComponent,
    TableComponent
  ],
  entryComponents: [
   
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SidebarModule,
    FooterModule,
    NavbarModule,
    FixedPluginModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PortalModule { }
