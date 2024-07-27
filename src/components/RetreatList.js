import React, { useEffect, useState } from "react";
import "./RetreatList.css";
import axios from "axios";
import RetreatCard from "./RetreatCard";

const RetreatList = ({ filters, searchQuery }) => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const retreatsPerPage = 3;

  console.log("value of filters", filters);

  useEffect(() => {
    axios
      .get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
      .then((response) => {
        setRetreats(response.data);
        setFilteredRetreats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching retreats", error);
      });
  }, []);

  useEffect(() => {
    let filtered = retreats;

    console.log("values in filter", filtered);

    if (filters.data) {
      const [startYear, endYear] = filters.data
        .split("-")
        .map((year) => parseInt(year, 10));

      filtered = filtered.filter((retreat) => {
        const retreatYear = new Date(retreat.date * 1000).getFullYear();
        return retreatYear >= startYear && retreatYear <= endYear;
      });
    }

    if (filters.type) {
      filtered = filtered.filter((retreat) => retreat.type === filters.type);
    }

    console.log(retreats);

    if (searchQuery) {
      filtered = filtered.filter((retreat) =>
        retreat.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRetreats(filtered);
    setCurrentPage(1);
  }, [filters, searchQuery, retreats]);

  const indexOfLastRetreat = currentPage * retreatsPerPage;
  const indexOfFirstRetreat = indexOfLastRetreat - retreatsPerPage;

  const currentRetreats = filteredRetreats.slice(
    indexOfFirstRetreat,
    indexOfLastRetreat
  );

  const totalPages = Math.ceil(filteredRetreats.length / retreatsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="retreat-list-container">
      <div className="retreat-list">
        {currentRetreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>

      <div className="btn">
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        
      </div>

    <div className="sp">
    <span className="fot">
          © 2024 Wellness Retreats. All rights reserved.
        </span>   
    </div>
    </div>
  );
};

export default RetreatList;
