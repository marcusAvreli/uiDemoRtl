import { Directive, ElementRef, Input, OnInit,HostListener,OnDestroy,Renderer2 ,AfterViewInit,OnChanges} from '@angular/core';
//import { SettingsService } from '@/app/core/settings.service';
//import { AfterViewInit, Directive, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[myStyleAnchors]',
})
export class RtlDirective implements OnInit , OnChanges{
  @Input() rtl: string;
  @Input() myStyleAnchors: string;
  
  private processing = false;


  constructor(
   
    private el: ElementRef,private renderer: Renderer2
  ) { console.log("directive","constructor");
 
  }


  ngOnInit() {
  console.log("directive","on init");
  
  console.log("directive","on init:"+this.rtl);
  
    if (this.rtl) {
      (this.el.nativeElement as HTMLElement).setAttribute('dir', 'rtl');
	  
      if (this.rtl === 'right') {
        (this.el.nativeElement as HTMLElement).classList.add('text-right');
      } else if (this.rtl === 'left') {
        (this.el.nativeElement as HTMLElement).classList.add('text-left');
      }
    }
  }
  
  
  ngOnChanges() {
  console.log("directive","on_changes_start:"+this.rtl);
   if (this.rtl=="rtl") {
   console.log("directive","on_changes_setting_rtl");
      (this.el.nativeElement as HTMLElement).setAttribute('dir', 'rtl');
	
	  }else{
	  console.log("directive","on_changes_setting_ltr");
	 (this.el.nativeElement as HTMLElement).setAttribute('dir', 'ltr');
	
	  }
    
  }
  
		

	

	}
	
