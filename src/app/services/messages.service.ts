import { Injectable } from '@angular/core';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() {}

  // show alert message -type: 'success', 'error', 'warning', 'info' or 'question' -
  showAlert(type, title?: string, message?: string, footer?) {
    swal.fire({
      title: title,
      text: message,
      type: type,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: true,
      focusConfirm: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: true,
      heightAuto: false,
      footer: footer
    });
  } // end showAlert

  // show loading
  showLoading(mensaje?) {
    if (!mensaje) {
      mensaje = 'Un momento por favor...';
    }
    const svg = Math.floor(Math.random() * 5 + 1);
    swal.fire({
      html: `
          <h2 class='center'>${mensaje}</h2>
          <div >
          <i class="fas fa-paw"></i>
          </div>
      `,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      heightAuto: false
    });
  } // end showLoading

  // close loading
  closeLoading() {
    swal.close();
  } // end closeLoading
} // end class
