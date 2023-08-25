import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((name, i) => {
        return (
          <li key={i}>
            <Btn onClick={() => onLeaveFeedback(name)}>{name}</Btn>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};