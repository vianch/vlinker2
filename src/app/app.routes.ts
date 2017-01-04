import { Routes, RouterModule } from "@angular/router";

import {HomeComponent} from "./home/home.component";

const APP_ROUTES: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    //   {path: "shopping-list", component: ShoppingListComponent},
    //   { path: "**",    component: NoContentComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
