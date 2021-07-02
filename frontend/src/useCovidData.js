import { useEffect, useState } from 'react';
import axios from 'axios';

const row2 = (d) => {
  d.map((p) => {
    p.vaccination_date = new Date(p.vaccination_date);
    p.fullyvaccinatedcumulative = +p.fullyvaccinatedcumulative;
  });
  return d;
};

export const useCovidData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/mdcovidvac').then((response) => {
      setData(row2(response.data.results.rows));
    });
  }, []);

  return data;
};
