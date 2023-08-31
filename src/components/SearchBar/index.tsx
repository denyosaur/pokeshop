import { BaseInput } from '../base_components';
import { SearchBarContainer } from './styledComponents';

const SearchBar: React.FC<SearchBarProps> = ({ value }) => {
  const inputStyles = {
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'rgb(247, 247, 247)',
    fontSize: '16px',
  };

  return (
    <SearchBarContainer>
      <BaseInput
        label='search'
        name='search'
        inputStyles={inputStyles}
        placeholder='What can we help you find?'
        value={value}
      />
    </SearchBarContainer>
  )
};

export default SearchBar;

interface SearchBarProps {
  value: string;
}
