import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, expr: {[from: string]: string}): string {
        if (!value) {
          return value;
        }
        const names = [];
        for (const name in expr) {
          if (expr.hasOwnProperty(name)) {
            names.push(name);
          }
        }

        return value.replace(new RegExp('\\b(' + names.join(')|(') + ')\\b', 'g'), function(match, p1, p2, p3, offset, string) {
          for (let i = 1; i < arguments.length - 2; ++i) {
            if (expr[arguments[i]] != null) {
              return expr[arguments[i]];
            }
          }
          return match;
        });
    }
}
