import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'arrayJoinPipe'
})
export class ArrayJoinPipe implements PipeTransform {

    transform(items: string[], deliminator: string): string {
        return items.join(deliminator);
    }

}
