import { Title } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';
import { StyledInput } from '../Styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleChange = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
