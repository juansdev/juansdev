import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public items: GalleryItem[] = [];

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox) {
    const path_portfolio = 'assets/img/about_me/';
    const extension = '.jpg';
    const all_images = ['master_web_full_stack', 'desarrollador_python', 'diplomado'];
    for (let index = 0; index < all_images.length; index++) {
      const image = all_images[index];
      all_images[index] = path_portfolio+image+extension;
      this.items.push(
        new ImageItem({
          src: all_images[index], 
          thumb: all_images[index]
        })
      );
    }
  }
  
  ngOnInit(): void {
    const config: GalleryConfig = {
      autoPlay: true,
      thumbPosition: "top"
    }
    this.gallery.ref()
    .setConfig(config);
    this.gallery.ref()
    .load(this.items);
  }

}
