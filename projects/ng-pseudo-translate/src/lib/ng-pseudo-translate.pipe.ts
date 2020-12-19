import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

const ACCENTED_MAP = {
  a: "ȧ",
  A: "Ȧ",
  b: "ƀ",
  B: "Ɓ",
  c: "ƈ",
  C: "Ƈ",
  d: "ḓ",
  D: "Ḓ",
  e: "ḗ",
  E: "Ḗ",
  f: "ƒ",
  F: "Ƒ",
  g: "ɠ",
  G: "Ɠ",
  h: "ħ",
  H: "Ħ",
  i: "ī",
  I: "Ī",
  j: "ĵ",
  J: "Ĵ",
  k: "ķ",
  K: "Ķ",
  l: "ŀ",
  L: "Ŀ",
  m: "ḿ",
  M: "Ḿ",
  n: "ƞ",
  N: "Ƞ",
  o: "ǿ",
  O: "Ǿ",
  p: "ƥ",
  P: "Ƥ",
  q: "ɋ",
  Q: "Ɋ",
  r: "ř",
  R: "Ř",
  s: "ş",
  S: "Ş",
  t: "ŧ",
  T: "Ŧ",
  v: "ṽ",
  V: "Ṽ",
  u: "ŭ",
  U: "Ŭ",
  w: "ẇ",
  W: "Ẇ",
  x: "ẋ",
  X: "Ẋ",
  y: "ẏ",
  Y: "Ẏ",
  z: "ẑ",
  Z: "Ẑ",
};

const strategies = {
  accented: {
    prefix: "[",
    postfix: "]",
    map: ACCENTED_MAP,
    elongate: true,
  },
};

@Pipe({
  name: "ngPseudoTranslate",
})
export class NgPseudoTranslatePipe implements PipeTransform {
  strategy: string = "accented";
  transform(value: string, isEnabled: boolean = true): string {
    if (isEnabled) {
      let opts = strategies[this.strategy];
      let pseudoLocalizedText = "";
      for (let character of value) {
        if (opts.map[character]) {
          const cl = character.toLowerCase();
          // duplicate "a", "e", "o" and "u" to emulate ~30% longer text
          if (
            opts.elongate &&
            (cl === "a" || cl === "e" || cl === "o" || cl === "u")
          ) {
            pseudoLocalizedText += opts.map[character] + opts.map[character];
          } else {
            pseudoLocalizedText += opts.map[character];
          }
        } else {
          pseudoLocalizedText += character;
        }
      }

      // If this string is from the DOM, it should already contain the pre- and postfix
      // if (pseudoLocalizedText.startsWith(opts.prefix) && pseudoLocalizedText.endsWith(opts.postfix)) {
      //   return pseudoLocalizedText;
      // }
      return opts.prefix + pseudoLocalizedText + opts.postfix;
    }
    return value;
  }
}
