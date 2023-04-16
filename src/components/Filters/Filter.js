import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Filter = ({
  filter,
  setFilter,
  setCountryData,
  setIsLoading,
  setHidden,
  hidden,
}) => {
  const handleChange = (e) => {
    let link = `https://restcountries.com/v2/region/${e.target.value}`;
    if (e.target.value === 'all') {
      setHidden(true);
      link = `https://restcountries.com/v2/all`;
    } else {
      setHidden(false);
    }

    setFilter(e.target.value);
    const fetchHandler = async (link) => {
      setIsLoading(true);
      const response = await fetch(link);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setCountryData(data);
      setIsLoading(false);
    };
    fetchHandler(link);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 180 }} size="large">
        <InputLabel id="demo-select-small">Filter</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={filter}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europe</MenuItem>
          <MenuItem value="americas">America</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>
          {!hidden && <MenuItem value="all">All Countries</MenuItem>}
        </Select>
      </FormControl>
    </>
  );
};
export default Filter;
