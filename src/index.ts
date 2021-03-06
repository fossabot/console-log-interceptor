import { IMonitorCallback, LogMonitor } from './log-monitor';

// Port of the monitoring server.
const port: number = 8888;
// Array of domains the monitoring server should expect logs from.
const whitelist: string[] = ['http://localhost:4200'];

// The callback that can be implemented to process the logs in the rest of the application.
let callback: IMonitorCallback = (log: string): void => {
  console.log(log);
}

// Create the monitoring server.
new LogMonitor(callback, whitelist, port);
