import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'spongebob' })
export class SpongebobPipe implements PipeTransform {
    transform(value: string): string {
        let isCap = false;
        return value.split("").map(val => {
            if (val === " ") {
                return val;
            }
            val = isCap ? val.toUpperCase() : val.toLowerCase();
            isCap = !isCap;
            return val;
        }).join("");

    }
}