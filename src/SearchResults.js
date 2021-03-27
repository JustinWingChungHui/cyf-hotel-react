import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  return (
    <table className="table table-striped table-sm">
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Nights</th>
          <th />
        </tr>
        {props.results &&
          props.results.map(result => (
            <SearchResult
              key={result.id}
              searchResult={result}
              setCustomerId={props.setCustomerId}
            />
          ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
