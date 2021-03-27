import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";
import Loading from "./Loading";

const Bookings = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = searchVal => {
    setSearchValue(searchVal);
    let filteredBookings = bookings.filter(b =>
      `${b.firstName}${b.surname}`
        .toUpperCase()
        .includes(searchVal.toUpperCase())
    );

    console.log(filteredBookings);
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data.error;
        }

        if (searchValue) {
          let filteredBookings = data.filter(b =>
            `${b.firstName}${b.surname}`
              .toUpperCase()
              .includes(searchValue.toUpperCase())
          );

          setBookings(filteredBookings);
        } else {
          setBookings(data);
        }
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [searchValue]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error}
        {loading ? (
          <Loading />
        ) : (
          <div className="customerResultsContainer">
            <SearchResults results={bookings} setCustomerId={setCustomerId} />
            <CustomerProfile id={customerId} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
