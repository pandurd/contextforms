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
import s from './Login.css';
import _ from 'lodash';
import BASE from '../../data/form/base';
import UK from '../../data/form/uk';

export default function Login({ title }) {

  let mergedField = _.merge(BASE, UK);

  const ukitems = [];
  Object.keys(mergedField.fields).forEach(function(key) {
    ukitems.push(<div>
      <label>{mergedField.fields[key].label}</label>
      &nbsp;&nbsp;&nbsp;
      <input type={mergedField.fields[key].type} />
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
           <h2>UK form</h2>

          <br/>
          <br/>
          { ukitems}

      </div>
    </div>
  );
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
};
