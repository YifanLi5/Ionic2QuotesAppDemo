import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuoteDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetailPage {

  quoteDetail: { quote: '', author: '' };
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.quoteDetail = navParams.get('quote');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuoteDetailPage');
  }

}
