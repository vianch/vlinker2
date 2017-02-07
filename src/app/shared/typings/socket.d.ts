declare const io: {
    connect(url: string): SocketIO.Socket;
}

interface ISocketEventsService {
    endMotionSensor(): void
    fadeEffect(): void;
    setRGBColors(RGBColors: RGBColors): void;
    setHexColors(hexColor: string): void;
    setIntensity(intensity: number): void;
    startMotionSensor(): void;
    rainbowEffect(): void;
    turnOnHalogenLight(): void;
    triggerCamera(timeOut: number): void;
    turnOnMotionSensor(): void;
    turnOffMotionSensor(): void;
}

interface RGBColors {
    red: number;
    green: number;
    blue: number;
}