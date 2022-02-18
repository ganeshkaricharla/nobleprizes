import React, { useEffect, useState } from 'react';
import './Home.css';
import Select from '../Select/Select';
import Table from '../Table/Table';
import Featured from '../Featured/Featured';
function Home() {
  const [categories, setCategories] = useState([]);
  const [years, setYears] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [data, setData] = useState([]);
  const [displaydata, setDisplayData] = useState([]);

  const handleFilterChange = function (event) {
    if (event.target.name === 'category') {
      setCategoryFilter(event.target.value);
    } else {
      setYearFilter(event.target.value);
    }
  };
  useEffect(() => {
    const changeValues = async () => {
      console.log(categoryFilter, yearFilter);
      if (categoryFilter == 'all' && yearFilter == 'all') {
        await setDisplayData(data);
      } else if (categoryFilter == 'all' && yearFilter != 'all') {
        await setDisplayData(data.filter((item) => item.year == yearFilter));
      } else if (categoryFilter != 'all' && yearFilter == 'all') {
        await setDisplayData(
          data.filter((item) => item.category == categoryFilter)
        );
      } else if (categoryFilter != 'all' && yearFilter != 'all') {
        await setDisplayData(
          data.filter(
            (item) => item.category == categoryFilter && item.year == yearFilter
          )
        );
      } else {
        console.log('Executing');
      }
    };
    changeValues();
  }, [categoryFilter, yearFilter]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://api.nobelprize.org/v1/prize.json');
      const data = await response.json();
      const dats = data.prizes;
      var finaldata = [];
      await dats.map((prize) => {
        prize.laureates &&
          prize.laureates.map((person) => {
            finaldata.push({
              fullname: person.surname + ' ' + person.firstname,
              category: prize.category,
              year: prize.year,
            });
          });
      });

      setData(finaldata);
      setDisplayData(finaldata);

      const cat = [];
      const year = [];
      data.prizes.forEach((prize) => {
        cat.push(prize.category);
        year.push(prize.year);
      });

      const uniquecat = cat.filter((item, i, ar) => ar.indexOf(item) === i);
      const uniqueYear = year.filter((item, i, ar) => ar.indexOf(item) === i);
      setCategories(uniquecat);
      setYears(uniqueYear);
    };
    getData();
  }, []);

  return (
    <div className='home-container'>
      <div className='home-featured'>
        <Featured data={data} />
      </div>
      <div className='home-filter-container'>
        <Select
          name='category'
          options={categories}
          handleFilterChange={handleFilterChange}
        />
        <Select
          name='year'
          options={years}
          handleFilterChange={handleFilterChange}
        />
      </div>

      <div className='home-table-container'>
        <Table data={displaydata} />
      </div>
    </div>
  );
}

export default Home;
