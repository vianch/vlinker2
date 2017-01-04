import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<div class="vl-content"><router-outlet></router-outlet></div>`,
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
        console.log("App component loaded!");
    }
}