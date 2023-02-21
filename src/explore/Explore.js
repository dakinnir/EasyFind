/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProfileCard } from "./ProfileCard";
import './Explore.styles.css'

export const ExplorePage = () => {
  const [professionals, setProfessionals] = useState([]);

  // fake data 
  const getProfessionals = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    const data = await response.data;
    const results = await data.results;
    setProfessionals(results);
  };

  useEffect(() => {
    getProfessionals();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex header-banner mb-3 justify-content-center text-center p-5">
          <div className="d-flex header-body justify-content-center flex-column">
            <h3>Start Searching Professionals Near You</h3>
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nam
            quaerat consequatur expedita earum. Nam dolor labore ipsa excepturi
            minima aut facere inventore nostrum quis ipsum! Placeat similique
            laboriosam officia!
          </small>
          </div>
          
        </div>
        <h3 className="mt-0">Professionals</h3>
        <form className="row g-3 mt-1">
          <div className="col-3">
            <input
              type="search"
              className="form-control form-control-sm"
              id="search"
              placeholder="Search for talents, professionals near you..."
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary btn-sm mb-3">
              Search
            </button>
          </div>
        </form>
        <div className="profiles-container mt-3 row">
          {professionals.map((pro) => {
            return <ProfileCard key={pro.phone} user={pro} />;
          })}
        </div>
      </div>
    </div>
  );
};
