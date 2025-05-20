import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={styles.container}>
      <h2>Contacts</h2>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBox;
