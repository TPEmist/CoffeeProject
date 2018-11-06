import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  if(props.quizResult === 'Level1'){
  return (
    <div className="result">
      報告老師！今天我家<strong>貓貓生產。</strong>!
    </div>
  );}
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;