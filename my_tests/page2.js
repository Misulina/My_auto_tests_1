//here is the class which has the 'open' method
//this class will be inherited by 'FormPage' because there we'll add the necessary path param

module.exports = class Page2{
    /**
     * @param path
     * /
     **/
    open(path){
        return browser.url(`https://www.globalsqa.com/${path}`)
    }
}