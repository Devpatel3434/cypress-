import LoginPage from '../PageObjects/login'

describe('test for POM',()=>{

    it('try to login',()=>{

        const lp=new LoginPage
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillpassword('admin')
        lp.submit()
    })

})