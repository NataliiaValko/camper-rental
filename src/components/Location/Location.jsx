import {CiLocationOn} from 'react-icons/ci';

import {useDispatch, useSelector} from 'react-redux';
import {selectLocation} from '../../redux/filter/selectors';
import {setLocation} from '../../redux/filters/slice';

import css from './Location.module.css';

export const Location = () => {
  const dispatch = useDispatch ();

  const location = useSelector (selectLocation);

  const handleChange = e => dispatch (setLocation (e.target.value));

  return (
    <div className={css.location}>
      <label htmlFor="location" className={css.label}>
        Location
        <input
          className={css.input}
          type="text"
          id="location"
          value={location}
          placeholder="City, country"
          onChange={handleChange}
        />
        <CiLocationOn className={css.icon} />
      </label>
    </div>
  );
};
