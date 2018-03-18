import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'arrayFromNumber' })
export class ArrayFromNumberPipe implements PipeTransform {

    transform(arraySize: number): any[] {
        return new Array(arraySize);
    }
}