import * as s from './SelectCityStyled.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import { countryFlags, countries, cities } from '../../assets/cityDatabase.js';

/*사용 방법
import { useLocation } from 'react-router-dom';
 const location = useLocation();
  const selectedCity = location.state?.selectedCity;
  console.log('Selected City:', selectedCity);
  하면 선택한 도시의 배열 넘어옴. 
  콘솔 보고 배열 생긴거 체크하며 값 넚으면 됨. 
  selectedCity는 필요에 따라서 useState로 구현하는것도 추천
  */

const SelectCity = ({ closeModal, getCity }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [country, setCountry] = useState(null);
  // const [prevURL, setPrevURL] = useState('');

  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const { url } = location.state || {};
  //   console.log('이전 페이지:' + url);
  //   setPrevURL(url);
  // }, []);

  const handleCityClick = (city) => {
    // navigate(prevURL, { state: { selectedCity: city.city } });
    console.log(city.city);
    getCity(country + " " + city.city);
  };

  // // Set 객체를 사용하여 중복된 나라를 제거
  // const uniqueCountries = Array.from(new Set(cities.map((e) => e.country))).map(
  //   (country) => {
  //     return cities.find((e) => e.country === country);
  //   },
  // );

  const continents = countries.reduce((acc, country) => {
    const { continent } = country;
    if (!acc[continent]) {
      acc[continent] = [];
    }
    acc[continent].push(country);
    return acc;
  }, {});

  const handleCountryClick = (country) => {
    setSelectedCountry(selectedCountry === country ? null : country);
    setCountry(country.country);
  };

  const filteredCities = selectedCountry
    ? cities.filter((city) => city.country === selectedCountry.country)
    : [];

  return (
    <s.PageLayout>
      <s.PageHeaderLayout>
          <s.BackButton onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              positions="fixed"
            >
              <path
                d="M8 2L1.8858 7.24074C1.42019 7.63984 1.42019 8.36016 1.8858 8.75926L8 14"
                stroke="#7A7A7A"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </s.BackButton>
          <s.PageName style={{ color: '#3E73B2' }}>지역 선택</s.PageName>
        </s.PageHeaderLayout>
      {Object.entries(continents).map(([continent, countries]) => (
        <s.ContinentWrapper key={continent}>
          <s.ContinentTitle>{continent}</s.ContinentTitle>
          {countries.map((country) => (
            <div key={country.id}>
              <s.SingleCountryContainer
                onClick={() => handleCountryClick(country)}
                selected={selectedCountry === country}
              >
                <s.Flag>{countryFlags[country.country]}</s.Flag>
                <s.Country>{country.country}</s.Country>
                <s.DownContainer selected={selectedCountry === country}>
                  <s.DownSvg />
                </s.DownContainer>
              </s.SingleCountryContainer>
              {selectedCountry === country && (
                <s.CityContainer>
                  {filteredCities.map((city) => (
                    <s.City
                      key={city.id}
                      onClick={() => handleCityClick(city)}
                    >
                      {city.city}
                    </s.City>
                  ))}
                </s.CityContainer>
              )}
            </div>
          ))}
        </s.ContinentWrapper>
      ))}
    </s.PageLayout>
  );
};

export default SelectCity;
