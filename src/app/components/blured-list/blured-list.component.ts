import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blured-list',
  templateUrl: './blured-list.component.html',
  styleUrls: ['./blured-list.component.scss']
})
export class BluredListComponent implements OnInit {

  @ViewChild('list') list: ElementRef;
  @ViewChild('foreground') foreground: ElementRef;

  private isBlured = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onBlur() {
    if (this.isBlured) {
      this.renderer.removeClass(this.list.nativeElement, 'blured');
      this.renderer.removeClass(this.foreground.nativeElement, 'active');
    } else {
      this.renderer.addClass(this.list.nativeElement, 'blured');
      this.renderer.addClass(this.foreground.nativeElement, 'active');

    }

    this.isBlured = !this.isBlured;
  }

}
