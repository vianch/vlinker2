import { Component, OnInit } from "@angular/core";

@Component({
    selector: "vl-password-generator",
    templateUrl: "password-generator.component.html",
    styles: [require("./password-generator.scss").toString()],
})
export class PasswordGeneratorComponent implements OnInit {
    public passwordString: string;

    public ngOnInit(): void {
        this.passwordString = "";
    }

    public generatePassword(): void {
        this.passwordString = "";
        this.passwordString = Math.random().toString(36).substr(2, 10);
    }
}
