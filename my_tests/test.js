import {short,medium} from './timeouts.js'
const FormPage = require('./form.page')
const SummaryPage  = require('./summary.page')

describe('Simple Page application',()=>{

    it('should open the link',async()=>{
        await   FormPage.open()
        await expect(browser).toHaveUrl('https://www.globalsqa.com/samplepagetest')
    })

    it('Submit the form with valid info',async()=>{
        await FormPage.fillForm('Popescu Ion','pop@yahoo.com','','3-5','This is a comment')
        await browser.pause(medium)
        //await expect(FormPage.name).toHaveAttributeContaining('required')
        await expect(SummaryPage.filledInfo).toBeDisplayed()
        await SummaryPage.clickBack()
        await expect(browser).toHaveUrlContaining('https://www.globalsqa.com/samplepagetest')
        await browser.pause(medium)
    })
    it('Submit the form with invalid info',async()=>{
        await FormPage.fillForm('Popescu Ion','popescu','','3-5','This is a comment')
        await browser.pause(medium)
        await expect(browser).toHaveUrl('https://www.globalsqa.com/samplepagetest')
        await browser.pause(medium)
    })
})