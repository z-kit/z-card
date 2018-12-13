import React from 'react';
import { storiesOf } from '@storybook/react';
import { card } from '../src/component';

const Card = card(React.createElement);

const InnerCardElements = [
  <div className="z-card__header">Title</div>,
  <div className="z-card__content">Content</div>,
  <div className="z-card__footer">Footer</div>,
];

storiesOf('CSS component', module)
  .add('default', () => <div className="z-card">{InnerCardElements}</div>)
  .add('elevated', () => <div className="z-card z-card--elevated-2">{InnerCardElements}</div>)
  .add('bordered', () => <div className="z-card z-card--bordered">{InnerCardElements}</div>)
  .add('flat', () => <div className="z-card z-card--flat">{InnerCardElements}</div>);

storiesOf('Stateless functional component', module)
  .add('default', () => <Card header="Title" content="Content" footer="Footer" />)
  .add('elevated', () => (
    <Card
      header="Title"
      content="Content"
      footer="Footer"
      elevation={2}
    />
  ))
  .add('bordered', () => <Card header="Title" content="Content" footer="Footer" bordered />)
  .add('flat', () => <Card header="Title" content="Content" footer="Footer" flat />);
