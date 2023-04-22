import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform is used to convert data
  // value: apply cheyyan pokunna data
  // search cheyyan ulla key : filterstring
  // nth property based anenn
  transform(value: any[], filterString: string, propName: any): any {

    const result: any = []

    if (!value || filterString == "" || propName == "") {
      return value
    }
    else {

      value.forEach((item: any) => {
        if (item[propName].trim().toLowerCase().includes(filterString.trim().toLowerCase())) {

          result.push(item)

        }
      })

      return result

    }
    return null;
  }

}
