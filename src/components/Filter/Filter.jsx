import { FilterContainer } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterContainer className="filter">
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={evt => {
          onFilter(evt.target.value);
        }}
      />
    </FilterContainer>
  );
};
