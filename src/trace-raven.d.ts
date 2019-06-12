export declare class TraceRaven {
    private batteryPercent;
    constructor(dsn: string, environment?: string, release?: string, enableAppBreadcrumbs?: boolean);
    write(message: string, category: string, type?: number): void;
    private initRaven(dsn, environment, release, enableAppBreadcrumbs);
    private initAutoCrumbs();
    private initAppVersion();
    private initBatteryStatus();
}
