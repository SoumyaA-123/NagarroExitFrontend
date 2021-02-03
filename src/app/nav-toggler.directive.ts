import {Directive, HostBinding,HostListener} from '@angular/core'

@Directive({
    selector :'[navbar-toggle]',
    exportAs:'nbToggler'
})
export class NavTogglerDirective{
    private showtogglebar=false;

    constructor(){
        
    }
    @HostBinding('class.is-active')
    get className(){
        return this.showtogglebar;
    }
    @HostListener('click',['$event'])
    onClick($event : MouseEvent){
        this.showtogglebar=!this.showtogglebar;
        console.log(event)
    }
    isNavMenuActive(){
        return this.showtogglebar
    }
}