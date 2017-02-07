import { Component } from "@angular/core";

import {SocketEventsService} from "../shared/socket.service";

@Component({
    moduleId: "lights",
    selector: "vl-lights",
    templateUrl: "lights.component.html",
    styleUrls: ["lights.scss"],
})
export class LightsComponent {
    private isTheLightOn: boolean;

    constructor( private socketEventsService: SocketEventsService) {
        this.isTheLightOn = false;
    }

    public turnOnHalogenLight(): void {
        this.socketEventsService.turnOnHalogenLight();
    }

    public toggleRGB(): void {
        if (this.isTheLightOn) {
            this.socketEventsService.setHexColors("#000000");
        } else {
            this.socketEventsService.setHexColors("#F20FE3");
        }
        this.isTheLightOn = !this.isTheLightOn;
    }

}
