import { Component, OnInit } from '@angular/core';
import {SearchService} from 'src/app/services/search.service';
import { AppConfig } from 'src/app/config/app.config';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/model/search';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchProduct:[]=[];
  public baseURI:String="";
  private sortingMethod="";
  search:Search[];
  sortType:string;
  sortReverse:boolean=false;
  filteredOrders:Search[];

 

  constructor(private searchService:SearchService,private route:ActivatedRoute) { }
//GETTING DATA FROM DATABASE
  ngOnInit() {
    this.searchService.getsearchProduct().subscribe((data)=>{
      for(var key in data){
        this.searchProduct[key]=data[key];
      }
      console.log("@@@@@@@ from ts file");
      console.log(this.searchProduct);
      this.baseURI=AppConfig.BASE_ENDPOINT;
    });

  }

dynamicSort(smethod){
    console.log("@@@@@");
    console.log(smethod);
    if(smethod=="Asc"){
      
      this.searchProduct.sort(function(product1:Search, product2:Search){  
        let comparison = 0;  
        if(product1.sprice > product2.sprice){  
        comparison = -1;  
        }else if(product1.sprice < product2.sprice){  
        comparison = 1;  
        }  
        return comparison;  
        }
      );
    }else{
      this.searchProduct.sort(function(product1:Search, product2:Search){  
        let comparison = 0;  
        if(product1.sprice < product2.sprice){  
        comparison = -1;  
        }else if(product1.sprice > product2.sprice){  
        comparison = 1;  
        }  
        return comparison;  
        }
      );
    }

}

  
getSortOrders(){
  console.log(this.sortingMethod);
  this.dynamicSort(this.sortingMethod);
  }
}

