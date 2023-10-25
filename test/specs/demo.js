describe('sample test', () => {
    it('login check', async () => {
      await driver.pause(8000)
      const signinButton = await $('//*[@text="Log in"]')
      await expect(signinButton).toHaveText('Log in')
      const forgotButton = await $('//*[@text="Forgot Password"]')
      await expect(forgotButton).toHaveText("Forgot Password")
      await forgotButton.click()
      await $('//*[@text="Next"]').click()
      const errorMessage = await $(`//*[@text= "Email can't be blank"]`)
      await expect(errorMessage).toHaveText("Email can't be blank")

    });
})