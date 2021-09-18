import React from 'react';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
   // console.log('options',options);
   return( options.map((option, index) => (
        <button key={index} type="button" name={option} onClick={onLeaveFeedback} className={s.btn}>{option}</button>
   ))
   )
}

export default FeedbackOptions;