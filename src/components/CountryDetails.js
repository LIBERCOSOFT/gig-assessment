import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listCountryDetails,
} from "../redux/actions/countriesActions";


const CountryDetails = () => {
  const { country } = useParams();
  let countryDetails = useSelector((state) => state.selectedCountry.country);
  const dispatch = useDispatch();

  const fetchCountryDetail = async (countryName) => {
    const response = await axios
      .get(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(listCountryDetails(response.data));
    
  };
  
  useEffect(() => {
    if (country && country !== "") fetchCountryDetail(country)
    
  }, [dispatch]);

  return (
    <div className="ui grid container">
      {countryDetails.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={countryDetails[0].flags.svg} />
              </div>
              <div className="column rp">
                <h1>{countryDetails[0].name}</h1>
                <h1>{countryDetails[0].nativeName}</h1>
                <h1>{countryDetails[0].population}</h1>
                <h1>{countryDetails[0].region}</h1>
                <h1>{countryDetails[0].subregion}</h1>
                <h1>{countryDetails[0].capital}</h1>
                <h1>{countryDetails[0].topLevelDomain}</h1>
                {/* <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
