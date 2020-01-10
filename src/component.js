/**
 * Copyright (c) 2019 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-card
 */

import styles from './style.css';

const MAX_ELEVATION_LEVEL = 5;

// Global to local style mappings, works even if using CSS modules
const classnames = {
  card: styles['z-card'] || 'z-card',
  header: styles['z-card__header'] || 'z-card__header',
  content: styles['z-card__content'] || 'z-card__content',
  footer: styles['z-card__footer'] || 'z-card__footer',
  flat: styles['z-card--flat'] || 'z-card--flat',
  bordered: styles['z-card--bordered'] || 'z-card--bordered',
  animated: styles['z-card--animated'] || 'z-card--animated',
  elevationLevels: (() => {
    const elevationLevels = [];
    for (let i = 1; i <= MAX_ELEVATION_LEVEL; i += 1) {
      elevationLevels[i] = styles[`z-card--elevated-${i}`] || `z-card--elevated-${i}`;
    }
    return elevationLevels;
  })(),
};

export function card(e) {
  return ({ header, content, footer, flat, bordered, animated, elevation, children, ...props }) => {
    const headerElement = (header) ? e('div', { className: classnames.header }, header) : null;
    let contentElement = (content) ? e('div', { className: classnames.content }, content) : null;
    if (children) contentElement = e('div', { className: classnames.content }, children);
    const footerElement = (footer) ? e('div', { className: classnames.footer }, footer) : null;
    const block = [classnames.card];
    const modifiers = [];
    if (flat) modifiers.push(classnames.flat);
    if (bordered) modifiers.push(classnames.bordered);
    if (animated) modifiers.push(classnames.animated);
    if (elevation) modifiers.push(classnames.elevationLevels[elevation]);
    const additionalClasses = props.class || props.className || '';
    const className = block.concat(modifiers).join(' ') + additionalClasses;
    return e('div', { className, ...props }, [
      headerElement,
      contentElement,
      footerElement,
    ]);
  };
}

export default card;
