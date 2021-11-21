import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResults'
})
export class SearchResultsPipe implements PipeTransform {
  transform(value: any, searchedText: string, searchedType: string): any {
    if (!searchedText) {
      return null;
    }
    if (
      searchedType !== 'name' &&
      searchedType !== 'region' &&
      searchedType !== 'language' &&
      searchedType !== 'currency'
    ) {
      return null;
    }

    if (searchedType === 'currency') {
      return value.filter(v =>
        v?.currencies?.some(
          c =>
            (c.code || '').match(new RegExp(searchedText, 'gi')) ||
            (c.name || '').match(new RegExp(searchedText, 'gi'))
        )
      );
    }

    if (searchedType === 'language') {
      return value.filter(v =>
        v?.languages?.some(
          c =>
            (c.iso639_2 || '').match(new RegExp(searchedText, 'gi')) ||
            (c.name || '').match(new RegExp(searchedText, 'gi'))
        )
      );
    }
    return value.filter(v =>
      v[searchedType].match(new RegExp(searchedText, 'gi'))
    );
  }
}
