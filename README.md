# ng-pseudolocalize
Angular pipe to pseudo-localize html text

This angular pipe can be used to pseudo-translate the text content to visualize any clippings or messed-up user interface components

# What is Pseudo-localization?
Pseudo Localization is a way to simulate translation of English UI strings, without waiting for, or going to the effort of doing real translation

# How it helps?
Early problem detection before actual translation of text takes place.
  text that is cut off (truncation)
  
  strings that are formed by combining (concatenation)
  
  strings that are not made localizable (hard-coding)

example usage:
```
<button class="btn btn-primary" (click)="convert(val.value)">{{getBtnText() | ngPseudoTranslate:true}}</button>
```
You can also disable pseudo translation for a template by setting arg to false, and it will render it as is.
```
<button class="btn btn-primary" (click)="convert(val.value)">{{getBtnText() | ngPseudoTranslate:false}}</button>
```
![image](https://user-images.githubusercontent.com/14909563/102699026-b1facb00-4267-11eb-978b-7ad480569a9d.png)

# install
```
npm install ng-pseudo-translate
```
# import in your app module
```
import { NgPseudoTranslateModule } from "ng-pseudo-translate";

@NgModule(
...
imports: [NgPseudoTranslateModule]
...
)
```

inspired from https://github.com/tryggvigy/pseudo-localization
