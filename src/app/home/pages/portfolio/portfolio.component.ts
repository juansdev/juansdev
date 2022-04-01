import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

interface AllImages {
  [name:string]: {
    categories: Array<string>,
    main_image: {[name: string]: string},
    images: {[name: string]: Array<string>},
    videos_url: {[name: string]: Array<string>},
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
  styleUrls: ['./portfolio.component.min.css']
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
        "main_image": {
          'desktop': 'modo_costo',
          'app': 'app_modo_costo'
        },
        "images": {
          'desktop': ["modo_edicion", "modo_venta"],
          'app': ["app_modo_edicion", "app_modo_venta"]
        },
        "videos_url": {
          'desktop': ['15nD_vj2vB2Wvuw_Jh6au4EuPOBGmtG_j'],
          'app': ["1-Q8nX5ATcj0YPSHa7hrSKf17vbz_ZioY"]
        },
        "repository_url": ""
      },
      "blog": {
        "categories": ['web'],
        "main_image": {
          'web' : 'blog'
        },
        "images": {
          'web': []
        },
        "videos_url": {
          'web': ['1-SBO8UMC8oH9AL4VmOCOYLgFwJt2Nj-P']
        },
        "repository_url": "https://github.com/juansdev/blog"
      },
      "cuatro-en-raya": {
        "categories": ['desktop'],
        "main_image": {
          'desktop' : "cuatro_en_raya"
        },
        "images": {
          'desktop': []
        },
        "videos_url": {
          'desktop': ["1-2ku79wPh-TXRlcqqAHtW3aRD06nTFxc"]
        },
        "repository_url": "https://github.com/juansdev/cuatro-en-raya"
      },
      "economy-app": {
        "categories": ['web'],
        "main_image": {
          'web' : "economy_app"
        },
        "images": {
          'web': ["flujo_de_efectivo", "presentacion", "resultado", "servicios"]
        },
        "videos_url": {
          'web': ["1-4NvI6HpREpQ4WTkLGWPocrTwF1n83lZ"]
        },
        "repository_url": "https://github.com/juansdev/economy-app"
      },
      "foro": {
        "categories": ['web'],
        "main_image": {
          'web' : "foro"
        },
        "images": {
          'web': []
        },
        "videos_url": {
          'web': ['1-VBxInsELE9BZkGXEhD_no2qFH8C8gvZ']
        },
        "repository_url": "https://github.com/juansdev/foro"
      },
      "registra-tu-libro": {
        "categories": ['web'],
        "main_image": {
          'web' : "registra_tu_libro"
        },
        "images": {
          'web': []
        },
        "videos_url": {
          'web': ['1-cNBGZsWXjN1-XYspaZwKUaojPBo_uLv']
        },
        "repository_url": "https://github.com/juansdev/registra-tu-libro"
      },
      "registrador-ig": {
        "categories": ['desktop'],
        "main_image": {
          'desktop' : "inventario"
        },
        "images": {
          'desktop': ["flujo_de_caja", "historial", "registrar_producto", "registrar_retiro", "registrar_venta"]
        },
        "videos_url": {
          'desktop': ["1-KG_Pi_VEe8V5iMOASCo2ANJkHaFDgEe"]
        },
        "repository_url": ""
      },
      "triki": {
        "categories": ['desktop'],
        "main_image": {
          'desktop' : "triki"
        },
        "images": {
          'desktop': []
        },
        "videos_url": {
          'desktop': ["1-FtactYugp0MulZJkICXlj2dcai_kRa2"]
        },
        "repository_url": "https://github.com/juansdev/triki"
      },
      "videos-favoritos": {
        "categories": ['web'],
        "main_image": {
          'web' : "videos_favoritos"
        },
        "images": {
          'web': []
        },
        "videos_url": {
          'web': ['1-Uw0IYKmpQUs3cTX8dqeYzhHCY2zKaKQ']
        },
        "repository_url": "https://github.com/juansdev/videos-favoritos"
      }
    }
    for (const key in all_images) {
      if (Object.prototype.hasOwnProperty.call(all_images, key)) {
        const repository = all_images[key];
        const categories = repository['categories'];
        if (categories.includes('desktop')) {
          const key_by_category = key+'-'+'desktop';
          this.desktop['ids'].push(key_by_category);
          this.desktop['lightbox_items'].push(this.getImagesByCategory(all_images, 'desktop', key));
          this.desktop['repositories_url'].push(repository['repository_url']);
        } 
        if(categories.includes('web')) {
          const key_by_category = key+'-'+'web';
          this.web['ids'].push(key_by_category);
          this.web['lightbox_items'].push(this.getImagesByCategory(all_images, 'web', key));
          this.web['repositories_url'].push(repository['repository_url']);
        } 
        if(categories.includes('app')) {
          const key_by_category = key+'-'+'app';
          this.app['ids'].push(key_by_category);
          this.app['lightbox_items'].push(this.getImagesByCategory(all_images, 'app', key));
          this.app['repositories_url'].push(repository['repository_url']);
        }
      }
    }
    this.all['ids'] = this.desktop["ids"].concat(this.web["ids"], this.app["ids"]);
    this.all['lightbox_items'] = this.desktop["lightbox_items"].concat(this.web["lightbox_items"], this.app["lightbox_items"]);
    this.all['repositories_url'] = this.desktop["repositories_url"].concat(this.web["repositories_url"], this.app["repositories_url"]);
  }

  getImagesByCategory(all_images: AllImages, category: string, key: string): ImageItem {
    const key_by_category = key+'-'+category;
    const galleryRef = this.gallery.ref(key_by_category);
    galleryRef.setConfig({
      autoPlay: true,
      thumbPosition: "top"
    });
    const folder_image = key;
    const repository = all_images[key];
    const main_image = repository['main_image'][category];
    const images = repository['images'][category];
    const videos_url = repository['videos_url'][category];
    const path_portfolio = 'assets/img/portfolio/';
    const extension = '.webp';
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
    return lightbox_item;
  }

  openLightbox(index: number, id: string) {
    this.lightbox.open(0, id);
  }
}
