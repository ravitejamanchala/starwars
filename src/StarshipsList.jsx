import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Input, Button } from "reactstrap";

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxCrewSize, setMaxCrewSize] = useState(Infinity);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [mostFilmsShip, setMostFilmsShip] = useState(null);
  const [loading, setLoading] = useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        // got it from goggle for image scraping
        const starshipsWithImages = await Promise.all(
          response.data.results.map(async (starship) => {
            try {
              const imageUrlResponse = await axios.get(
                `https://starwars-visualguide.com/assets/img/starships/${getImageId(
                  starship.url
                )}.jpg`
              );
              return {
                ...starship,
                imageUrl: imageUrlResponse.config.url,
              };
            } catch (error) {
              return {
                ...starship,
                imageUrl:
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg",
              };
            }
          })
        );
        const shipWithMostFilms = starshipsWithImages.reduce(
          (prev, current) => {
            return prev.films.length > current.films.length ? prev : current;
          },
          starshipsWithImages[0]
        );

        setMostFilmsShip(shipWithMostFilms);
        setStarships(starshipsWithImages);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);
// got it from goggle for image scraping
  const getImageId = (url) => {
    const idRegExp = /\/(\d+)\/$/;
    return url.match(idRegExp)[1];
  };

  const filteredStarships = useMemo(() => {
    return starships.filter((ship) => {
      const matchesSearchTerm = ship.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchesCrewSize = ship.crew.includes("-")
        ? parseInt(ship.crew.split("-")[0], 10) <= maxCrewSize &&
          parseInt(ship.crew.split("-")[1], 10) >= maxCrewSize
        : parseInt(ship.crew, 10) <= maxCrewSize;
      const matchesStarshipClass = selectedClass
        ? ship.starship_class === selectedClass
        : true;
      const matchesManufacturer = selectedManufacturer
        ? ship.manufacturer === selectedManufacturer
        : true;

      return (
        matchesSearchTerm &&
        matchesCrewSize &&
        matchesStarshipClass &&
        matchesManufacturer
      );
    });
  }, [
    debouncedSearchTerm,
    maxCrewSize,
    selectedClass,
    selectedManufacturer,
    starships,
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setMaxCrewSize(
      event.target.value === "-1" ? Infinity : parseInt(event.target.value, 10)
    );
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleManufacturerChange = (event) => {
    setSelectedManufacturer(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setMaxCrewSize(Infinity);
    setSelectedClass("");
    setSelectedManufacturer("");
  };

  return (
    <div className="starships-list container">
      <div className="filters row mb-3 align-items-center justify-content-center">
        <div className="col-md-4 mb-3">
          <label>Search ship by name</label>
          <Input
            type="text"
            placeholder="Type name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-2 mb-3">
          <label>Max Crew Size</label>
          <select
            value={maxCrewSize === -1 ? "Infinite" : maxCrewSize}
            onChange={handleFilterChange}
            className="form-control"
          >
            <option value="-1">No Limit</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <label>Class</label>
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="form-control"
          >
            <option value="">All Classes</option>
            <option value="Starfighter">Starfighter</option>
            <option value="Medium transport">Medium transport</option>
            <option value="Star dreadnought">Star dreadnought</option>
            <option value="Light freighter">Light freighter</option>
            <option value="Frigate">Frigate</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <label>Manufacturer</label>
          <select
            value={selectedManufacturer}
            onChange={handleManufacturerChange}
            className="form-control"
          >
            <option value="">All Manufacturers</option>
            <option value="Incom Corporation">Incom Corporation</option>
          </select>
        </div>
        <div className="col-md-2 mb-3 mt-3 pt-1">
          <Button
            color="primary"
            className="ml-3"
            onClick={clearFilters}
            disabled={
              !searchTerm &&
              maxCrewSize === Infinity &&
              !selectedClass &&
              !selectedManufacturer
            }
          >
            Clear Filters
          </Button>
        </div>
      </div>
      <hr color="primary" />
     
      {loading ? (
        <p className="h1 text-center">Loading...</p>
      ) : (
        <div className="row">
        {filteredStarships.map((ship) => (
          <div
            key={ship.name}
            className="starship-container col-12 mb-4 border-3"
          >
            <div className="row">
              <div className="col-md-3">
                <img
                  src={ship.imageUrl}
                  alt={ship.name}
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-md-9">
                <h2 className="mt-3">
                  {ship.name}{" "}
                  {ship.films.length === mostFilmsShip.films.length && (
                    <span>★★★</span>
                  )}
                </h2>
                <p>Model: <b>{ship.model}</b></p>
                <p>Manufacturer: <b>{ship.manufacturer}</b></p>
                <p>Starship Class: <b>{ship.starship_class}</b></p>
                <p>Crew: <b>{ship.crew}</b></p>
              </div>
            </div>
          </div>
        ))}
         </div>
      )}
        
     
    </div>
  );
};


function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default StarshipsList;