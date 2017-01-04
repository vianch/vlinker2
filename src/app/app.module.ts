import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRouting} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "./shared/shared.module";
import {PasswordGeneratorComponent} from "./password-generator/password-generator.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        AppRouting,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PasswordGeneratorComponent,
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule  { }
