/// <reference types = "cypress"/>  

import { DatepickerPage } from "../pages/DatePickerPage.js"; 

describe('Login page tests', () => {

    const datepickerPage = new DatepickerPage(); 

    beforeEach(() => {
        datepickerPage.open()
    })

    it('Today test', () => {
        datepickerPage.commonDatepickerInput.click()
        datepickerPage.todayDate.click()
        
    })
})