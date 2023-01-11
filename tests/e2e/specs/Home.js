// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "Visits the app root url": (browser) => {
    browser
      .init()
      .waitForElementVisible("#count-view")
      .getText("#count-view", (result) => {
        browser.assert.strictEqual(result.value, "0");
      })
      .click("button[name=plus]")
      .getText("#count-view", (result) => {
        browser.assert.strictEqual(result.value, "1");
      })
      .click("button[name=minus]")
      .getText("#count-view", (result) => {
        browser.assert.strictEqual(result.value, "0");
      })
      .click("button[name=minus]")
      .getText("#count-view", (result) => {
        browser.assert.strictEqual(result.value, "-1");
      })
      .end();
  },
};
