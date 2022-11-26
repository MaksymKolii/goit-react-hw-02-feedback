import PropTypes from 'prop-types';
import { SectionClass, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionClass>
      {title && <Title>{title}</Title>}
      {children}
    </SectionClass>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
