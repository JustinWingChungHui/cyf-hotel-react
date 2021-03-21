import React from "react";
import moment from "moment";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  return (
    <table className="table table-striped">
      <thead>
        <th>Id</th>
        <th>Title</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room Id</th>
        <th>Check in date</th>
        <th>Check out date</th>
        <th>Nights</th>
      </thead>
      <tbody>
        {props.results.map(result => (
          <SearchResult searchResult={result} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
