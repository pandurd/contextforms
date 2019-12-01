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
import s from './Page.css';
import _ from 'lodash';
import BASE from '../../data/form/base';
import UK from '../../data/form/uk';
import UKC from '../../data/form/ukcompany';


export default function Page({ title, html }) {


  let mergedField = _.merge(BASE, UK, UKC);

  const ukitems = [];
  Object.keys(mergedField.fields).forEach(function(key) {
    if(mergedField.fields[key].enabled)
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
           <h2>UK company custom edited form</h2>

          <br/>
          <br/>
          { ukitems}
      </div>
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};
