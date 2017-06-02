import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {QuotesDetailPage} from '../quotes-detail/quotes-detail';

/**
 * Generated class for the QuotesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html',
})
export class QuotesListPage {

  quotesList = [];
  filteredQuotes = [];
  isfiltered: boolean;

  constructor(private http:Http, private navController: NavController) {
    this.isfiltered = false;
    this.http.get('quotes.json')
    .map(res => res.json())
    .subscribe(
        data => {
          this.quotesList = data.quotes;
        },
        err => console.log("error is "+err), // error
        () => console.log('read quotes Complete '+ this.quotesList) // complete
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
  }

  
  searchQuotes(event) {
    var query:string = event.target.value;
    if (query.length > 2) {
      console.log(event.target.value)
      var filteredJson:string[] = [];
      for(var i = 0; i < this.quotesList.length; i++){
        if(this.quotesList[i].author.toLowerCase().indexOf(query) != -1){
          filteredJson.push(this.quotesList[i]);
        }
      }
      this.isfiltered = true;
      this.filteredQuotes = filteredJson;
    }
    else{
      this.isfiltered = false;
    }
  }

  
  itemTapped(event, quote) {
    console.log(quote);
    this.navController.push(QuotesDetailPage, {
      quote: quote
    });
  }


}
