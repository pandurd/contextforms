/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.css';
import _ from 'lodash';
import base from '../../data/form/base'


export default function Contact({ title }) {


  const items = [];
  Object.keys(base.fields).forEach(function(key) {
    items.push(<div>
      <label>{base.fields[key].label}</label>
      &nbsp;&nbsp;&nbsp;
      <input type={base.fields[key].type} />
      <br/>
      <br/>
    </div>);
  })

  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
          <br/>
          <br/>
           <h2>Base form</h2>

          <br/>
          <br/>
          { 
            items
          }
      </div>
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
