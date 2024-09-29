import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const cityOptions = [
  { value: '28.6139 77.2090', label: 'Delhi, IN' },
  { value: '17.3850 78.4867', label: 'Hyderabad, IN' },
  { value: '19.0760 72.8777', label: 'Mumbai, IN' },
  { value: '13.0827 80.2707', label: 'Chennai, IN' },
  { value: '22.5726 88.3639', label: 'Kolkata, IN' },
  { value: '12.9716 77.5946', label: 'Bangalore, IN' },
  { value: '23.8103 90.4125', label: 'Dhaka, BD' },
  { value: '35.6895 139.6917', label: 'Tokyo, JP' },
  { value: '51.5074 -0.1278', label: 'London, UK' },
  { value: '40.7128 -74.0060', label: 'New York, US' },
  { value: '48.8566 2.3522', label: 'Paris, FR' },
  { value: '39.9042 116.4074', label: 'Beijing, CN' },
  { value: '-33.4489 -70.6693', label: 'Santiago, CL' },
  { value: '-34.6037 -58.3816', label: 'Buenos Aires, AR' },
  { value: '55.7558 37.6173', label: 'Moscow, RU' },
  { value: '19.4326 -99.1332', label: 'Mexico City, MX' },
  { value: '1.3521 103.8198', label: 'Singapore, SG' },
  { value: '30.0444 31.2357', label: 'Cairo, EG' },
  { value: '41.9028 12.4964', label: 'Rome, IT' },
  { value: '-37.8136 144.9631', label: 'Melbourne, AU' },
  { value: '34.0522 -118.2437', label: 'Los Angeles, US' },
  { value: '55.6761 12.5683', label: 'Copenhagen, DK' },
  { value: '39.7392 -104.9903', label: 'Denver, US' },
  { value: '37.7749 -122.4194', label: 'San Francisco, US' },
  { value: '41.3111 69.2797', label: 'Tashkent, UZ' },
  { value: '14.5995 120.9842', label: 'Manila, PH' },
  { value: '36.1699 -115.1398', label: 'Las Vegas, US' },
  { value: '19.1519 84.8068', label: 'Bhubaneswar, IN' },
  { value: '25.276987 55.296249', label: 'Dubai, AE' },
  { value: '35.6762 139.6503', label: 'Tokyo, JP' },
  { value: '37.5665 126.978', label: 'Seoul, KR' },
  { value: '55.7558 37.6173', label: 'Moscow, RU' },
  { value: '26.8206 30.8025', label: 'Egypt, EG' },
  { value: '40.4168 -3.7038', label: 'Madrid, ES' },
];

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    const filteredOptions = cityOptions.filter((city) =>
      city.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    return new Promise((resolve) => {
      resolve({ options: filteredOptions });
    });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
