describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp()
  })

  it('should have edit text on welcome screen', async () => {
    await expect(element(by.id('edit-text'))).toBeVisible()
  })
})
