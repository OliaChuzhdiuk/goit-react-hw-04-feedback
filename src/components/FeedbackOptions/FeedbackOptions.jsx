import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {items.map(item => {
          const buttName = item[0].toUpperCase() + item.slice(1, item.length);
          return (
            <li className={s.item} key={item}>
              <button
                className={s.button}
                onClick={() => onLeaveFeedback(item)}
              >
                {buttName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;