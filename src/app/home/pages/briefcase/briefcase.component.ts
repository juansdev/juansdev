import { Component } from '@angular/core';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent {

  public path_images: {[name:string]: {[name:string]: string}} = {
    "all": {},
    "desktop": {},
    "web": {},
    "app": {}
  };

  public Object = Object;

  constructor() {
    const path_briefcase = 'assets/img/briefcase/';
    const url_images: {[name:string]: string} = {
      "blog.png": "https://github.com/juansdev/blog",
      "foro.png": "https://github.com/juansdev/foro",
      "videos_favoritos.png": "https://github.com/juansdev/videos-favoritos",
      "registra_tu_libro.png": "https://github.com/juansdev/registra-tu-libro"
    }
    // Get all keys from url_images
    const images: {[name:string]: Array<string>} = {
      "all": Object.keys(url_images),
      "desktop": [],
      "web": ['blog.png', 'videos_favoritos.png', 'foro.png', 'registra_tu_libro.png'],
      "app": []
    };
    for (const key in images) {
      if (Object.prototype.hasOwnProperty.call(images, key) && images[key].length) {
        for (let index = 0; index < images[key].length; index++) {
          const filename = images[key][index];
          const path_filename = path_briefcase + filename;
          this.path_images[key][path_filename] = url_images[filename];
        }
      }
    }
  }

}
