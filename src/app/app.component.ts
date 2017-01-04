import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <div class="vl-content">
            <router-outlet></router-outlet>
        </div>`,
})
export class AppComponent { }
