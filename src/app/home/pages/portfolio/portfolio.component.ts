import { Component } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

interface AllImages {
  [name:string]: {
    categories: Array<string>,
    main_image: string,
    images: Array<string>,
    videos_url: Array<string>,
    repository_url: string
  }
}

interface Image {
  ids: Array<string>,
  lightbox_items: GalleryItem[],
  repositories_url: Array<string>
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  public all: Image = {
    "ids": [],
    "lightbox_items": [],
    "repositories_url": []
  };

  public desktop: Image = {
    "ids": [],
    "lightbox_items": [],
    "repositories_url": []
  };
  public web: Image = {
    "ids": [],
    "lightbox_items": [],
    "repositories_url": []
  };
  public app: Image = {
    "ids": [],
    "lightbox_items": [],
    "repositories_url": []
  };

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox) {
    const all_images: AllImages = {
      "aplicacion-dinamica-dc": {
        "categories": ['desktop', 'app'],
        "main_image": "modo_costo",
        "images": ["modo_edicion", "modo_venta"],
        "videos_url": ["15nD_vj2vB2Wvuw_Jh6au4EuPOBGmtG_j","1-Q8nX5ATcj0YPSHa7hrSKf17vbz_ZioY"],
        "repository_url": ""
      },
      "blog": {
        "categories": ['web'],
        "main_image": "blog",
        "images": [],
        "videos_url": [],
        "repository_url": "https://github.com/juansdev/blog"
      },
      "cuatro-en-raya": {
        "categories": ['desktop'],
        "main_image": "cuatro_en_raya",
        "images": [],
        "videos_url": ["1-2ku79wPh-TXRlcqqAHtW3aRD06nTFxc"],
        "repository_url": "https://github.com/juansdev/cuatro-en-raya"
      },
      "economy-app": {
        "categories": ['web'],
        "main_image": "economy_app",
        "images": ["flujo_de_efectivo", "presentacion", "resultado", "servicios"],
        "videos_url": ["1-4NvI6HpREpQ4WTkLGWPocrTwF1n83lZ"],
        "repository_url": "https://github.com/juansdev/economy-app"
      },
      "foro": {
        "categories": ['web'],
        "main_image": "foro",
        "images": [],
        "videos_url": [],
        "repository_url": "https://github.com/juansdev/foro"
      },
      "registra-tu-libro": {
        "categories": ['web'],
        "main_image": "registra_tu_libro",
        "images": [],
        "videos_url": [],
        "repository_url": "https://github.com/juansdev/registra-tu-libro"
      },
      "registrador-ig": {
        "categories": ['desktop'],
        "main_image": "inventario",
        "images": ["flujo_de_caja", "historial", "registrar_producto", "registrar_retiro", "registrar_venta"],
        "videos_url": ["1-KG_Pi_VEe8V5iMOASCo2ANJkHaFDgEe"],
        "repository_url": ""
      },
      "triki": {
        "categories": ['desktop'],
        "main_image": "triki",
        "images": [],
        "videos_url": ["1-FtactYugp0MulZJkICXlj2dcai_kRa2"],
        "repository_url": "https://github.com/juansdev/triki"
      },
      "videos-favoritos": {
        "categories": ['web'],
        "main_image": "videos_favoritos",
        "images": [],
        "videos_url": [],
        "repository_url": "https://github.com/juansdev/videos-favoritos"
      }
    }
    const path_portfolio = 'assets/img/portfolio/';
    const extension = '.png';
    const config: GalleryConfig = {
      autoPlay: true,
      thumbPosition: "top"
    };
    for (const key in all_images) {
      if (Object.prototype.hasOwnProperty.call(all_images, key)) {
        const folder_image = key;
        const repository = all_images[key];
        const images = repository['images'];
        const videos_url = repository['videos_url'];
        const galleryRef = this.gallery.ref(key);
        galleryRef.setConfig(config);
        const main_image = repository['main_image'];
        const url_main_img = path_portfolio+folder_image+'/'+main_image+extension;
        galleryRef.addImage({ 
          src: url_main_img, 
          thumb: url_main_img
        });
        for (let index = 0; index < images.length; index++) {
          const image = images[index];
          const url_img = path_portfolio+folder_image+'/'+image+extension;
          galleryRef.addImage({
            src: url_img,
            thumb: url_img
          });
        }
        for (let index = 0; index < videos_url.length; index++) {
          const video_url = videos_url[index];
          galleryRef.addVideo({
            src: [{
              url: 'https://drive.google.com/uc?export=download&id='+video_url,
              type: 'video/mp4'
            }],
            thumb: 'https://drive.google.com/thumbnail?id='+video_url
          });
        }
        const lightbox_item = new ImageItem({
          src: url_main_img, 
          thumb: url_main_img
        });
        const categories = repository['categories'];
        if (categories.includes('desktop')) {
          this.desktop['ids'].push(key);
          this.desktop['lightbox_items'].push(lightbox_item);
          this.desktop['repositories_url'].push(repository['repository_url']);
        } 
        if(categories.includes('web')) {
          this.web['ids'].push(key);
          this.web['lightbox_items'].push(lightbox_item);
          this.web['repositories_url'].push(repository['repository_url']);
        } 
        if(categories.includes('app')) {
          this.app['ids'].push(key);
          this.app['lightbox_items'].push(lightbox_item);
          this.app['repositories_url'].push(repository['repository_url']);
        }
      }
    }
    this.all['ids'] = this.desktop["ids"].concat(this.web["ids"], this.app["ids"]);
    this.all['lightbox_items'] = this.desktop["lightbox_items"].concat(this.web["lightbox_items"], this.app["lightbox_items"]);
    this.all['repositories_url'] = this.desktop["repositories_url"].concat(this.web["repositories_url"], this.app["repositories_url"]);
  }

  openLightbox(index: number, id: string) {
    this.lightbox.open(0, id);
  }
}
