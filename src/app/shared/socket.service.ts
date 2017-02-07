import { Injectable } from "@angular/core";


@Injectable()
class SocketEventsService implements ISocketEventsService {
    private socket: SocketIO.Socket;

    constructor() {

      this.socketIOConnection(`http://localhost:3000`);
    }

    public setRGBColors(RGBColors: RGBColors): void {
        this.socket.emit("setColors", { color: RGBColors });
    }

    public setHexColors(hexColor: string): void {
        this.socket.emit("setColors", { color: hexColor });
    }

    public setIntensity(_intensity: number): void {
        this.socket.emit("setIntensity", { intensity : _intensity});
    }

    public rainbowEffect(): void {
        this.socket.emit("rainbowColors", {data: ""});
    }

    public fadeEffect(): void {
        this.socket.emit("fadeColors", { data: "" });
    }

    public turnOnHalogenLight(): void {
        this.socket.emit("relayToggle", { data: "" });
    }

    public triggerCamera(timeOut: number): void {
        this.socket.emit("triggerCamera", { stateTrigger: 1});
        setTimeout(() => {
            this.socket.emit("triggerCamera", { stateTrigger: 0});
            this.socket.emit("setColors", { color: "#000000" });
        }, timeOut);

    }

    public startMotionSensor(): void {
        this.socket.emit("startMotionSensor", {data: ""});
    }

    public endMotionSensor(): void {
        this.socket.emit("endMotionSensor", {data: ""});
    }

    public turnOnMotionSensor(): void {
        this.socket.emit("turnOnMotionSensor", {data: ""});
    }

    public turnOffMotionSensor(): void {
        this.socket.emit("turnOffMotionSensor", {data: ""});
    }

    private socketIOConnection(server: string): void {
        this.socket = io.connect(server);
        this.socket.on("connectionServer", (data: { message: string }) => {
            console.log(data.message);
        });
    }
}

export {SocketEventsService}
