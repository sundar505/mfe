/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <p>From RB 2</p>
      <Link to='/rb3'>GO RB#=3</Link>
      <Link to='/about'>GO ABOUT</Link>
    </h1>
  );
}
