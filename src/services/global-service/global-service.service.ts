import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
export enum MessageType {
  Success,
  Info,
  Warning,
  Error,
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public GlobalLoadoer = true;
  public LocalLoadoer = false;
  public ButtonLoadoer = false;
  constructor(private toastr: ToastrService) {
    toastr.toastrConfig.closeButton = true;
    toastr.toastrConfig.newestOnTop = true;
    toastr.toastrConfig.progressBar = true;
    toastr.toastrConfig.positionClass = 'toast-top-center';
    toastr.toastrConfig.preventDuplicates = false;
    toastr.toastrConfig.extendedTimeOut = 1000;
  }

  showGlobalLoader() {
    this.GlobalLoadoer = true;
  }

  hideGlobalLoader() {
    this.GlobalLoadoer = false;
  }
  showLocalLoader() {
    this.LocalLoadoer = true;
  }

  hideLocalLoader() {
    this.LocalLoadoer = false;
  }
  showButtonLoader() {
    this.ButtonLoadoer = true;
  }
  hideButtonLoader() {
    this.ButtonLoadoer = false;
  }
  //#region Messaging
   messageAlert(
    messageType: MessageType,
    message: string|undefined,
  ) {
    this._messageAlert(messageType, message??'');
  }

  public messageSwal(
    messageType: MessageType,
    message: string,
  ) {
    this._messageSwal(messageType, message);
  }

 _messageAlert(messageType: MessageType, message: string) {
    switch (messageType) {
      case MessageType.Success:
        this.toastr.success(message);
        break;
      case MessageType.Info:
        this.toastr.info(message);
        break;
      case MessageType.Warning:
        this.toastr.warning(message);
        break;
      case MessageType.Error:
        this.toastr.error(message);
        break;
    }
  }

  private _messageSwal(messageType: MessageType, message: string) {
    Swal.fire({
      title: message,
      // icon: MessageType[messageType].toLowerCase(),
      confirmButtonText: 'Close',
    });
  }

  public messageConfirm(title: string, onDelete: Function) {
    Swal.fire({
      title: title,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.value) {
        onDelete();
      }
    });
  }


 

}
