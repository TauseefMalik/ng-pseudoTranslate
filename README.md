# ng-pseudolocalize
Angular pipe to pseudo-localize html text

This angular pipe can be used to pseudo-translate the text content to visualize any clippings or messy user interface
example:
```
<button class="btn btn-primary" (click)="convert(val.value)">{{getBtnText() | ngPseudoTranslate:true}}</button>
```

![image](https://user-images.githubusercontent.com/14909563/102699026-b1facb00-4267-11eb-978b-7ad480569a9d.png)
