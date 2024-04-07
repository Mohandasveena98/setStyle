import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[setStyle]',
  standalone: true,
})
export class setStyle implements OnInit {
  @Input() css!: any;

  public ele!: ElementRef;
  public result!: string;

  constructor(element: ElementRef) {
    this.ele = element;
  }

  ngOnInit() {
    let i = 0;
    Object.keys(this.css).map((key) => {
      if (i == 0) {
        this.result = key + ':' + this.css[key] + ';';
        i++;
      } else {
        this.result = this.result + key + ':' + this.css[key] + ';';
      }
    });
    this.ele.nativeElement.style = this.result;
  }
}
