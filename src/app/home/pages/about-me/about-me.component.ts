import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.min.css']
})
export class AboutMeComponent implements OnInit {

  public items: GalleryItem[] = [];

  constructor(
    public gallery: Gallery) {
    const path_portfolio = 'assets/img/about_me/';
    const extension = '.webp';
    const all_images = ['cientifico_de_datos', 'ingenieria_de_sistemas', 'master_web_full_stack', 'desarrollador_python', 'diplomado'];
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

  getFileName(url: string): string {
    const filename = url.replace(/^.*[\\\/]/, '').replace('.webp', '').split('_').join(' ');
    return filename.charAt(0).toUpperCase() + filename.slice(1);
  }

}
