describe("Join As Member", function(){

    beforeAll(function(){
        browser.get("https://www.istockphoto.com/join");

        browser.driver.manage().window().maximize();
    });

    it("Enter company email", function(){

        var txtEmail = element(by.model("register['email']"));

        txtEmail.clear();

        txtEmail.sendKeys("test1@demo.com");

        expect(txtEmail.getAttribute("value")).toEqual("test1@demo.com");


    });

    it("Enter password", function(){

        var txtPassword = element(by.model("register['password']"));

        txtPassword.clear();

        txtPassword.sendKeys("test@123");

        expect(txtPassword.getAttribute("value")).toEqual("test@123");


    });

    it("Enter confirm password", function(){

        var txtConfirmPassword = element(by.model("register['passwordConfirmation']"));

        txtConfirmPassword.clear();

        txtConfirmPassword.sendKeys("test@123");

        expect(txtConfirmPassword.getAttribute("value")).toEqual("test@123");


    });

    it("Select Email Preference", function(){

        var cbEmailPref = element(by.id("checkbox"));

        cbEmailPref.click();

        expect(cbEmailPref.isSelected()).toBe(false);

    });

    it("Submit Form", function(){

        element(by.id("register-button")).click();
    });

});