//this class is specific to the page opened after submiting the form with valid info

//const Form = require('./form.page')
class SummaryPage {

    get title(){
        return $('h3')
    }
    get goBackLink(){
        return $('h3 a')
    }
    get filledInfo(){
        return $('#contact-form-2599')
    }

    async clickBack(){
        await(await this.goBackLink ).click()
    }
}
module.exports = new SummaryPage()