/**
 * @module UiModule
 */ /** */
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,ViewContainerRef,AfterViewInit } from '@angular/core';
/**
 * @whatItDoes Returns a simple ui component as defined in the {@link UiModule}.
 */
@Component({
  selector: 'c2c-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements AfterViewInit{
  /**
   * attr.aria-hidden (optional)
   */
  @Input() ariaHidden: boolean;
  /**
   * Category (pural) for the type of options (e.g. Restaurants, animals, cities, etc.)
   * @default all is used as a default like this: `All ${category}`
   */
  @Input() category: string;
  /**
   * Options given in select box
   */
  @Input() options: Array<any>;
  /**
   * attr.aria-label (optional)
   */
  @Input() displayMemberPath:string;
   
  @Input() label: string;
  /**
   * attr.title (optional)
   */
  @Input() title: string;
  /**
   * `background-color` from the `select` element when not focused.
   */
  @Input() color: string;
  /**
   * attr.tabindex (optional)
   */
  @Input() tabindex: number;
  /**
   * Emits all changes via `update`.
   */
  @Output() update = new EventEmitter();
  /**
   * A reference to the `select` element.
   */
  @ViewChild('select') private select: ElementRef;
  /**
   * Gets the select value.
   * @returns returns the current value of the `select`.
   */
  
  get(): string {
    const selectNative = this.select.nativeElement;
  //  return selectNative.options[selectNative.selectedIndex].value;
  return selectNative.options[selectNative.selectedIndex];
  }
  /**
   * Sets the `select` value.
   */
  set(newValue: string) {
    this.select.nativeElement.value = newValue;
  }
  private hostElement : HTMLElement;
  constructor(private readonly viewRef: ViewContainerRef) {
/*
    console.log(this.viewRef.element.nativeElement);
	

	this.hostElement = this.viewRef.element.nativeElement;
	*/
}
	 ngAfterViewInit() {
		 const option = this.select.nativeElement as HTMLElement;
		 
		 for(var i=0;i<this.options.length;i++){
		 const tag = document.createElement('option')
		const text=  this.options[i][this.displayMemberPath];
		
		 tag.textContent = text;
		 option.appendChild(tag);
		
		 }
	 }
}