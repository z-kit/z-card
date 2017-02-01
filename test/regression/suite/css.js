module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-card', 1000)
      .assert.containsText('.z-card__header', 'Title')
      .assert.containsText('.z-card__content', 'Content')
      .assert.containsText('.z-card__footer', 'Footer')
      .end();
  },
  'Fill parent container': (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-card', 1000)
      .getElementSize('#root', (parentSize) => {
        const parentWidth = parentSize.value.width;
        browser.getElementSize('.z-card', (cardSize) => {
          const cardWidth = cardSize.value.width;
          browser.assert.equal(parentWidth, cardWidth);
        });
      })
      .end();
  },
  bordered: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=bordered')
      .waitForElementPresent('.z-card', 1000)
      .assert.cssProperty('.z-card', 'border', '1px solid rgb(221, 221, 221)')
      .end();
  },
  elevated: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=elevated')
      .waitForElementPresent('.z-card', 1000)
      .getCssProperty('.z-card', 'box-shadow', (result) => {
        browser.assert.ok(result.value !== 'none', 'Elevated cards should cast some shadow');
      })
      .end();
  },
  flat: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=flat')
      .waitForElementPresent('.z-card', 1000)
      .getCssProperty('.z-card', 'box-shadow', (result) => {
        browser.assert.ok(result.value === 'none', 'Flat cards should not cast any shadows');
      })
      .end();
  },
};
