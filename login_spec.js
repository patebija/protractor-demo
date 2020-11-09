describe("Login User", function(){

    beforeAll(function(){
        browser.get("https://www.istockphoto.com/join");

        browser.driver.manage().window().maximize();
    });

    it("Click Login", function(){

      element(by.id("sign-i")).click();

    });
    

});