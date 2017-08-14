import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navCtrl: NavController, private geolocation: Geolocation) {
  }

  onAddPlace(value: {title: string}) {
  	this.placesService.addPlace(value);
  	this.navCtrl.pop();
  }

  onLocateUser() {
  	this.geolocation.getCurrentPosition()
  		.then(
  			(location) => {
  				console.log('Location fetched succesfully');

  			}
  		)
  		.catch(
  		(error) => console.log('An error occured')
  		);
  			
  }

}
 