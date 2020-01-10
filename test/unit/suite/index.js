import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { card } from '../../../src/component';

configure({ adapter: new Adapter() });

const ZCard = card(React.createElement);

test('Card default view', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZCard header="Title" content="Content" footer="Footer" />).html();
  const expected = shallow((
    <div className="z-card">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Card passthrough style props', (t) => {
  const msg = 'should render with style';
  const actual = shallow(<ZCard header="Title" content="Content" footer="Footer" style={{ border: 0 }} />).html();
  const expected = shallow((
    <div className="z-card" style={{ border: 0 }}>
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Card default view with children', (t) => {
  const msg = 'should render children as content';
  const actual = shallow(<ZCard>Hello!</ZCard>).html();
  const expected = shallow((
    <div className="z-card">
      <div className="z-card__content">
        Hello!
      </div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Card elevated view', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZCard header="Title" content="Content" footer="Footer" elevation={2} />,
  ).html();
  const expected = shallow((
    <div className="z-card z-card--elevated-2">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Card bordered view', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZCard header="Title" content="Content" footer="Footer" bordered />,
  ).html();
  const expected = shallow((
    <div className="z-card z-card--bordered">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});

test('Card flat view', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZCard header="Title" content="Content" footer="Footer" flat />,
  ).html();
  const expected = shallow((
    <div className="z-card z-card--flat">
      <div className="z-card__header">Title</div>
      <div className="z-card__content">Content</div>
      <div className="z-card__footer">Footer</div>
    </div>
  )).html();
  return t.deepEqual(actual, expected, msg);
});
