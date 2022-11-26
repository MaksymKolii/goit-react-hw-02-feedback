import PropTypes from 'prop-types';
import { List, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>
        <Text>
          Good:<span>{good}</span>
        </Text>
      </li>
      <li>
        <Text>
          Neutral:<span>{neutral}</span>
        </Text>
      </li>
      <li>
        <Text>
          Bad:<span>{bad}</span>
        </Text>
      </li>
      <li>
        <Text>
          Total:<span>{total}</span>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback:<span>{positivePercentage}%</span>
        </Text>
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
