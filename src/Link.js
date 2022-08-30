
// THIS IS ONLY FOR TESTING PURPOSES
import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';


const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};


export default function Link({ page, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

Link.defaultProps = {
  children: PropTypes.node,
  page: PropTypes.number,
};

Link.propTypes = {
  children: 'hello world',
  page: 0,
};
