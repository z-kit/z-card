import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { card } from '../../../src/component';

const ZCard = card(React.createElement);

test('Card default view', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZCard header={'Title'} content={'Content'} footer={'Footer'} />);
  const expected = JSX(
    <div className="z-card">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Card elevated view', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZCard header={'Title'} content={'Content'} footer={'Footer'} elevation={2} />
  );
  const expected = JSX(
    <div className="z-card z-card--elevated-2">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Card bordered view', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZCard header={'Title'} content={'Content'} footer={'Footer'} bordered />
  );
  const expected = JSX(
    <div className="z-card z-card--bordered">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Card flat view', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZCard header={'Title'} content={'Content'} footer={'Footer'} flat />
  );
  const expected = JSX(
    <div className="z-card z-card--flat">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});
