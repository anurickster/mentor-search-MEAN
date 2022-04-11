import { Pipe, PipeTransform } from '@angular/core';
import { Mentor } from '../models/mentor';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(mentor: Array<Mentor>, ...args: Array<string>): Array<Mentor> {
    // return mentor.filter((m) => m.name.includes(args[0])); // funtional
    return mentor; // temporary added for removing error
  }
}
