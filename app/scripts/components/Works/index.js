/* eslint max-len: ["error", 200] */

/**
 * Works
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions';

const propTypes = {
  schema: PropTypes.object,
  selectWork: PropTypes.func,
};

function Works({ schema, selectWork }) {
  return (
    <div className="portfolio">
      <Scrollbars autoHeightMax={1000}>
        <ul className="portfolio__holder">
          {schema.works.map((elem, key) => (
            <li key={key} onClick={() => selectWork(key)} className={classNames('portfolio__element', elem.class)}>
              <ReactCSSTransitionGroup transitionName="portfolio" transitionAppear transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <a name={elem.title}>
                  <img src={elem.image.small} role="presentation" />
                  <div className="portfolio__about"></div>
                </a>
              </ReactCSSTransitionGroup>
            </li>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
}

Works.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
  };
}

export default connect(mapStateToProps, actions)(Works);
