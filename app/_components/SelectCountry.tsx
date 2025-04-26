import { getCountries } from '@/app/_lib/data-service';
import { countryInterface } from '../types';



async function SelectCountry({ defaultCountry, name, id, className } : countryInterface ) {
  const countries = await getCountries();
  const flag =
    countries.find((country: countryInterface) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
     
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((c: countryInterface) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
