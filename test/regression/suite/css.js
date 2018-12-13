import test from 'ava';
import Nightmare from 'nightmare';

test('CSS component - title', (t) => {
  t.plan(1);
  const msg = 'should render the title content';
  const expected = 'Title';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-card')
    .evaluate(() => document.querySelector('.z-card__header').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - main', (t) => {
  t.plan(1);
  const msg = 'should render the main content';
  const expected = 'Content';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-card')
    .evaluate(() => document.querySelector('.z-card__content').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - footer', (t) => {
  t.plan(1);
  const msg = 'should render the footer content';
  const expected = 'Footer';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-card')
    .evaluate(() => document.querySelector('.z-card__footer').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - fill', (t) => {
  t.plan(1);
  const msg = 'should render a container that fill the parent\'s width';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-card')
    .evaluate(() => {
      const outerWidth = document.querySelector('#root').getBoundingClientRect().width;
      const innerWidth = document.querySelector('.z-card').getBoundingClientRect().width;
      return [outerWidth, innerWidth];
    })
    .end()
    .then(widths => t.deepEqual(widths[0], widths[1], msg));
});

test('CSS component - bordered', (t) => {
  t.plan(1);
  const msg = 'should render the card borders';
  const expected = '1px solid rgb(221, 221, 221)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=bordered')
    .wait('.z-card')
    .evaluate(() => getComputedStyle(document.querySelector('.z-card')).border)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - elevated', (t) => {
  t.plan(1);
  const msg = 'card should cast some shadow';
  const notExpected = 'none';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=elevated')
    .wait('.z-card')
    .evaluate(() => getComputedStyle(document.querySelector('.z-card')).boxShadow)
    .end()
    .then(actual => t.notDeepEqual(notExpected, actual, msg));
});

test('CSS component - flat', (t) => {
  t.plan(1);
  const msg = 'card should not cast shadows';
  const expected = 'none';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=flat')
    .wait('.z-card')
    .evaluate(() => getComputedStyle(document.querySelector('.z-card')).boxShadow)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
