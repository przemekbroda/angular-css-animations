import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-animation',
  templateUrl: './dialog-animation.component.html',
  styleUrls: ['./dialog-animation.component.scss']
})
export class DialogAnimationComponent implements OnInit {

  @ViewChild('dialog') dialog: ElementRef;

  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onShowDialog() {
    this.renderer.addClass(this.dialog.nativeElement, 'active');
  }

  onDismissDialog() {
    this.renderer.removeClass(this.dialog.nativeElement, 'active');
  }

}
