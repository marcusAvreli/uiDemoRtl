import { Component ,ViewChild,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {RprtDtSrc} from "./entities/rprtDataSource";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'app';
 statuses: Array<RprtDtSrc>
  valueToShow : string;
  myLa: string;
  rtl:string;
  myStyle:string;
  constructor(private translateService: TranslateService) {
	translateService.use("he");
	
  }
  ngOnInit(){
this.statuses= new Array<RprtDtSrc> (
    new RprtDtSrc("0", "he","ddd"),
    new RprtDtSrc("1", "en","ddd"),
    new RprtDtSrc("2", "ru","ddd"),
	new RprtDtSrc("3", "it","ddd")
)
  this.valueToShow = "name";
}

onSelectUpdate(item,event){
console.log("test select");
console.log("select_item:"+item);
console.log("select_event:"+JSON.stringify(event));
 let index:number =  event.target["selectedIndex"] - 1;
 console.log("index:"+index);
 this.myLa = this.statuses[index].name;
 this.translateService.use(this.statuses[index].name);
 if(this.myLa == "he"){
 this.rtl="rtl";
 }else{
 this.rtl="ltr";
 }
}
 ngAfterViewInit() {

		 //const c2c = this.select.nativeElement as HTMLElement;
		// c2c.options= this.options

	 }
}
