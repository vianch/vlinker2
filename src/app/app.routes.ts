import { Routes, RouterModule } from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {TableComponent} from "./table/table.component";

const APP_ROUTES: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "table", component: TableComponent},
    //   {path: "shopping-list", component: ShoppingListComponent},
    //   { path: "**",    component: NoContentComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
