import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ListingForm = (props) => {
  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    price: '$0+',
    bedrooms: '0+',
    home_type: 'House',
    bathrooms: '0+',
    sqft: '1000+',
  });

  const { sale_type, price, bedrooms, home_type, bathrooms, sqft } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers = {
      'Content-Type': 'application/json',
    };

    setLoading(true);
    axios
      .post('https://homeafrikabackend.herokuapp.com/api/listings/search', {
        sale_type,
        price,
        bedrooms,
        home_type,
        bathrooms,
        sqft,
      })
      .then((res) => {
        setLoading(false);
        props.setListings(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="listingform">
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sale_type">
              Sale or Rent
            </label>
            <select
              className="listingform__select"
              name="sale_type"
              onChange={(e) => onChange(e)}
              value={sale_type}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sqft">
              Sqft
            </label>
            <select
              className="listingform__select"
              name="sqft"
              onChange={(e) => onChange(e)}
              value={sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="price">
              Minimum Price
            </label>
            <select
              className="listingform__select"
              name="price"
              onChange={(e) => onChange(e)}
              value={price}
            >
              <option>$0+</option>
              <option>$200,000+</option>
              <option>$400,000+</option>
              <option>$600,000+</option>
              <option>$800,000+</option>
              <option>$1,000,000+</option>
              <option>$1,200,000+</option>
              <option>$1,500,000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bedrooms">
              Bedrooms
            </label>
            <select
              className="listingform__select"
              name="bedrooms"
              onChange={(e) => onChange(e)}
              value={bedrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="home_type">
              Home Type
            </label>
            <select
              className="listingform__select"
              name="home_type"
              onChange={(e) => onChange(e)}
              value={home_type}
            >
              <option>House</option>
              <option>Apartment</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bathrooms">
              Baths
            </label>
            <select
              className="listingform__select"
              name="bathrooms"
              onChange={(e) => onChange(e)}
              value={bathrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          {loading ? (
            <div className="listingform__loader">
              <Loader type="Oval" color="#424242" height={50} width={50} />
            </div>
          ) : (
            <button className="listingform__button listingform__button--primary">Search</button>
          )}
        </div>
      </div>
    </form>
  );
};

ListingForm.propTypes = {
  setListings: PropTypes.func.isRequired,
};

export default ListingForm;
