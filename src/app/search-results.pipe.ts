import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchResults"
})
export class SearchResultsPipe implements PipeTransform {
  transform(value: any, searchedText: string, searchedType: string): any {
    if (!searchedText) return null;

    if (searchedType == "currency")
      return value.filter(v =>
        (v.currencies[0].code || "").match(new RegExp(searchedText, "gi"))
      );

    return value.filter(v =>
      v[searchedType].match(new RegExp(searchedText, "gi"))
    );
  }
}
