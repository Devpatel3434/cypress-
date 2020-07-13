import LoginPage from '../PageObjects/login'

describe('test for POM',()=>{

    it('try to login',()=>{

        const lp=new LoginPage // store the value under LoginPage to constant var lp
        lp.visit() // this will directly call the method visit method define at login.js under pageobjects
        lp.fillEmail('admin@yourstore.com') // same as above call the method and also return thr value
        lp.fillpassword('admin')
        lp.submit()
    })

})