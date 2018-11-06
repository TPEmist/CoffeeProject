import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props){
    return(
        <div className='questionCount'>
        第<span>{props.counter}</span>問
        </div>
    );
}

QuestionCount.propTypes={
    counter:PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;