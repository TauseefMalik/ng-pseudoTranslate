# ng-pseudolocalize
Angular pipe to pseudo-localize html text

This angular pipe can be used to pseudo-translate the text content to visualize any clippings or messy user interface
example:
```
<button class="btn btn-secondary" (click)="convert(val.value)">{{getBtnText() | ngPseudoTranslate:true}}</button>
```