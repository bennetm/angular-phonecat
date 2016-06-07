interface PhoneRouteParams {
  phoneId: string
}

class DetailLayoutController {
  phone : any;
  mainImageUrl : string ;
  
  constructor($routeParams : PhoneRouteParams, Phone : any) {
      this.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone : any) {
          this.mainImageUrl = phone.images[0];
      });
   }

  setImage(url: string) {
    this.mainImageUrl = url;
  }
}
DetailLayoutController.$inject = ['$routeParams', 'PhoneSvc'];
export default DetailLayoutController;
