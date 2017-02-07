import { Routes, RouterModule } from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {PasswordGeneratorComponent} from "./password-generator/password-generator.component";
import {ColorPickerComponent} from "./color-picker/color-picker.component";
import {LightsComponent} from "./lights/lights.component";

const APP_ROUTES: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "color-picker", component: ColorPickerComponent},
    {path: "lights", component: LightsComponent},
    {path: "password-generator", component: PasswordGeneratorComponent},
    //   {path: "shopping-list", component: ShoppingListComponent},
    //   { path: "**",    component: NoContentComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
