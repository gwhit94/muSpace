import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'spongebob'})
export class SpongebobPipe implements PipeTransform {
  transform(value: string): string {
    let array = value.split("");
    for (let i = 0; i < array.length; i++){
        let char = array[i];
        let isCap = true;

        if(char === " "){
            return;
        }
        
        if( isCap ){
            char = char.toLowerCase();
            isCap = false;
        } else {
            char = char.toUpperCase();
            isCap = true;
        }
    }
    return array.join("");
}

}