import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import Swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  private user_id: string;
  private service_id: string;
  private template_id: string;

  constructor(private translate: TranslateService) {
    this.user_id = 'INwmeWqsQMYPe3C8Q';
    this.service_id = 'service_bo0vnwt';
    this.template_id = 'template_egsvy72';
  }

  ngOnInit() {
    init(this.user_id);
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    let success_title = "";
    let success_text = "";
    let success_confirm_button = "";
    let error_title = "";
    let error_text = "";
    let errro_confirm_button = "";
    this.translate.get('contact_me.pop_up.success').subscribe((success) => {
      success_title = success.title;
      success_text = success.text;
      success_confirm_button = success.confirm_button;
    });
    this.translate.get('contact_me.pop_up.error').subscribe((error) => {
      error_title = error.title;
      error_text = error.text;
      errro_confirm_button = error.confirm_button;
    });
    emailjs.sendForm(this.service_id, this.template_id, e.target as HTMLFormElement, this.user_id)
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          title: success_title,
          text: success_text,
          icon: "success",
          confirmButtonText: success_confirm_button
        })
      }, (error) => {
        Swal.fire({
            title: error_title,
            text: error_text,
            icon: "error",
            confirmButtonText: errro_confirm_button
        });
        console.log(error);
      });
  }

}
