import { Component } from "@angular/core";

import {SocketEventsService} from "../shared/socket.service";

@Component({
    selector: "th-color-picker",
    templateUrl: "color-picker.component.html",
    styleUrls: ["color-picker.scss"],
})
export class ColorPickerComponent {
    constructor(private socketEventsService: SocketEventsService) { }

    public setColorRGB(color: string): void {
        this.socketEventsService.setHexColors(color);
    }
}