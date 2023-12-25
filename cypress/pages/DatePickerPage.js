import { NavMenu } from "./components/NavMenuComponent"

export class DatepickerPage {
    get commonDatepickerTitle(){
        return cy.contains('nb-card-header', 'Common Datepicker')
    }

    get commonDatepickerInput(){
        return cy.get('input[placeholder="Form Picker"]')
    }

    get commonDatepickerCalendar(){
        return cy.get('nb-calendar')
    }

    get rangeDatepickerTitle(){
        return cy.contains('nb-card-header', 'Datepicker With Range')
    }

    get rangeDatepickerInput(){
        return cy.get('input[placeholder="Range Picker"]')
    }

    get rangeDatepickerCalendar(){
        return cy.get('nb-calendar-range')
    }

    get minMaxDatepickerTitle(){
        return cy.contains('nb-card-header', 'Datepicker With Disabled Min Max Values')
    }

    get minMaxDatepickerInput(){
        return cy.get('input[placeholder="Min Max Picker"]')
    }

    get minaMaxDatepickerCalendar(){
        return cy.get('nb-calendar')
    }

    get todayDate(){
        return cy.get('nb-calendar-day-cell.today')
    }

    navMenu = new NavMenu();

    open() {
        cy.visit('/pages')
        this.navMenu.openMenuByTitle('Forms')
        this.navMenu.openMenuByTitle('Datepicker')
        return this; 
    }
}