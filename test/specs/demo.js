describe('sample test', () => {
    it('login chck- forgot password', async () => {
      await driver.pause(9000)
      const signinButton = await $('//*[@buttontype="submit"]')
      await expect(signinButton).toHaveText('Log in')
      const forgotButton = await $('//*[@text="Forgot Password"]')
      await expect(forgotButton).toHaveText("Forgot Password")
      await forgotButton.click()
      await $('//*[@text="Next"]').click()
      const errorMessage = await $(`//*[@text= "Email can't be blank"]`)
      await expect(errorMessage).toHaveText("Email can't be blank")
      await driver.back()

    });
    
    it.only('Sign-in flow with Correct Password', async () => {
     await driver.pause(8000)
     await $('//*[@hint= "Email"]').setValue("abvRav@donotuse.com")
     await $('//*[@hint= "Password"]').setValue("Mable2023")
     const signinButton = await $('//*[@buttontype="submit"]')
     await signinButton.click()
     await driver.pause(6000) 
     const ClientWelcome = await $(`//*[@text= "Hi Rav"]`)
     await expect(ClientWelcome).toHaveText("Hi Rav")
     await $('//*[@text="Client profile Rav Clientfirst Account"]').click()
     await $('//*[@text="Log Out"]').click()
     await $('//*[@text="YES"]').click()
     await driver.pause(3000)  
   });
   it('Sign-in flow with Incoorrect Password', async () => {
    await driver.pause(3000)
    await $('//*[@hint= "Email"]').setValue("gaurav.jenifer_client@donotuse.com.au")
    await $('//*[@hint= "Password"]').setValue("Mable2023")
    const signinButton = await $('//*[@text="Log in"]')
    await signinButton.click()
    await driver.pause(3000)     
 
     });

})