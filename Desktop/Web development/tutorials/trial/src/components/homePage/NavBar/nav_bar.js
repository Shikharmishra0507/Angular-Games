import {React,useState} from 'react';
import './nav_bar.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


function NavBar(props) {
  const [country,selectCountry]=useState("");
  const [region ,selectRegion]=useState("");
    
  return (
    

    <div>
    <div className="horizontal-list" >
    {props.items.map(item => (
      <button className="item" key={item.id} onClick={()=>props.onChangeCategory(item.content)}>
        {item.content}
      </button>
    ))}
    
  </div>
  
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        
  </div>    
 
  );
}

export default NavBar; 
