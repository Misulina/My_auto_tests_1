//this class is specific to the form

const Page = require('./page2')

class FormPage extends Page{
    //define getters
    get name(){return $('#g2599-name')}
    get email(){return $('#g2599-email')}
    get website(){return $('#g2599-website')}
    get experience(){return $('#g2599-experienceinyears')}
    get expertise(){return $('input[value="Functional Testing"')}
    get education(){return $('input[value="Graduate"')}
    get alertBtn(){return $('button')}
    get comment(){return $('#contact-form-comment-g2599-comment')}
    get submitBtn(){return $('button[type="submit"]')}

    //open https://www.globalsqa.com/samplepagetest/
    open(){
        return super.open('samplepagetest');
    }

    //fill the form method

    async fillForm(name,email,website,experience,comment){
        await(await this.name).setValue(name)
        await(await this.email).setValue(email)
        await(await this.website).setValue(website)
        await(await this.experience).selectByVisibleText(experience)
        await(await this.comment).setValue(comment)
        await (await this.expertise).click()
        await(await this.education).click()
        await(await this.submitBtn).click()
    

    }
}

module.exports = new FormPage();