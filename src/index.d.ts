export declare class TraceRaven {
  constructor(dsn: string, environment?: string, release?: string);
  write(message: string, category: string, type?: number): void;
}
