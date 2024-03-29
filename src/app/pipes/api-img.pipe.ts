import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apiImg',
  standalone: true
})
export class ApiImgPipe implements PipeTransform {

  transform(value: string ): string {
    return 'https://image.tmdb.org/t/p/w500'+value ;
  }

}
