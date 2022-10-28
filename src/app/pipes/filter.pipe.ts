import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], request: string): any[] {
    if (!items) return [];
    if (!request) return items;

    request = request.toLowerCase();
    return items.filter((it) => {
      return it.specs.toLowerCase().includes(request);
    });
  }

}
