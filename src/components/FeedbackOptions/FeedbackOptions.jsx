import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        const firstUp = option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <li key={option}>
            <Button type="button" onClick={() => onClickFeedback(option)}>
              {firstUp}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
