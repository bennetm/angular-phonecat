interface IPhone {

    "additionalFeatures": string,
    "android": {
        "os": string,
        "ui": string
    },
    "availability": string[],
    "battery": {
        "standbyTime": string,
        "talkTime": string,
        "type": string
    },
    "camera": {
        "features": string[],
        "primary": string
    },
    "connectivity": {
        "bluetooth": string,
        "cell": string,
        "gps": boolean,
        "infrared": boolean,
        "wifi": string
    },
    "description": string,
    "display": {
        "screenResolution": string,
        "screenSize": string,
        "touchScreen": boolean
    },
    "hardware": {
        "accelerometer": boolean,
        "audioJack": string,
        "cpu": string,
        "fmRadio": boolean,
        "physicalKeyboard": boolean,
        "usb": string
    },
    "id": string
    "images": string[],
    "name": string,
    "sizeAndWeight": {
        "dimensions": string[],
        "weight": string
    },
    "storage": {
        "flash": string,
        "ram": string
    }
}
interface PhoneRouteParams {
  phoneId: string
}

class DetailLayoutController {
  public phone : any;
  public mainImageUrl: string;

  constructor($routeParams : PhoneRouteParams, PhoneSvc : any) {
    this.phone = PhoneSvc.get({phoneId: $routeParams.phoneId});
    //this.mainImageUrl = this.phone.images[0];
   }

  setImage(url: string) {
    this.mainImageUrl = url;
  }
}
DetailLayoutController.$inject = ['$routeParams', 'PhoneSvc'];
export default DetailLayoutController;
