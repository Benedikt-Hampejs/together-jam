import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit {

  constructor(private gallery: Gallery) { 

  }

  showGallery(index: number) {
    let prop = {
        images: [
            {path: 'assets/carousel1-gallery.png'},
            {path: 'assets/carousel2.jpeg'},
        ],
        index
    };
    this.gallery.load(prop);
  }
  ngOnInit(): void {
  }

}
