/// <reference types = "cypress"/>  

import moment from 'moment';
import { DatepickerPage } from "../pages/DatePickerPage.js"; 

describe('Datepicker page tests', () => {

    const datepickerPage = new DatepickerPage(); 

    beforeEach(() => {
        datepickerPage.open()
    })

    it('Verify Today\'s Calendar Date Display', () => {

        const todayDate = moment().format('ll') 

        datepickerPage.commonDatepickerInput.click()
        datepickerPage.todayDate.click()
        datepickerPage.commonDatepickerInput.should('have.value', todayDate)
        
    })
})