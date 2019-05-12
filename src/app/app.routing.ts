import { Routes } from '@angular/router';
export const AppRoutes: Routes = [

    { path: "", redirectTo: "auth/login", pathMatch: "full" },
    { path: "auth", loadChildren: "./auth/authentication.module#AuthenticationModule" },
    { path: "portal", loadChildren: "./portal/portal.module#PortalModule" }
]
