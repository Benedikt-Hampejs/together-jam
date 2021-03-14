import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index-section',
  templateUrl: './index-section.component.html',
  styleUrls: ['./index-section.component.scss'],
})
export class IndexSectionComponent implements OnInit {
  @Input() even!: boolean;
  @Input() imagesrc!: any;
  @Input() sectionlink!: any;

  hasAppeared: boolean = false;
  onAppear(){
    this.hasAppeared = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
