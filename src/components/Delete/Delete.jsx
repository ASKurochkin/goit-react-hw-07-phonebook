import PropTypes from 'prop-types';
import css from './Delete.module.css';

export default function DeleteAll({ onDeleteAllContact, checkedEl, onChange }) {
  return (
    <div className={css.delAllSection}>
      {checkedEl && (
        <button
          className={css.btnDelAll}
          type="button"
          onClick={onDeleteAllContact}
        >
          Delete all
        </button>
      )}
      <label>
        <input type="checkbox" checked={checkedEl} onChange={onChange} />
        &nbsp; Delete all
      </label>
    </div>
  );
}

DeleteAll.propTypes = {
  onDeleteAllContact: PropTypes.func.isRequired,
  checkedEl: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
