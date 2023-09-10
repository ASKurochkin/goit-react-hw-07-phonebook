import PropTypes from 'prop-types';

export default function Container({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
