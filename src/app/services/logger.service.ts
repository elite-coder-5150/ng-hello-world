import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

    private logger: Logger;
    printLog(message: string, type: string) {
        if (type === 'error') {
            console.error(message);
        } else if (type === 'warn') {
            console.warn(message);
        } else if (type === 'info') {
            console.info(message);
        } else if (type === 'debug') {
            console.debug(message);
        } else if (type === 'log') {
            console.log(message);
        } else if (type === 'table') {
            console.table(message);
        }
    }

    // create an html file for the logger
    printLogHTML(pageName: string, message: string, type: string) {
        // const logger = document.getElementById('logger');
        // if (logger) {
        //     const log = document.createElement('div');
        //     log.innerHTML = message;
        //     logger.appendChild(log);
        // }
        if (type === 'error') {
            const error = document.createElement('logger');

            if (error) {
                error.classList.add('error');
                error.innerHTML = `
                    <div class="logger-error">
                        <h3></h3>
                    </span> 
                    <span class="message">
                        ${message}
                    </span>`;
            }
        }
    }
}
