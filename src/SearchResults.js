import React from "react";
import moment from "moment";

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
        {props.results.map(d => (
          <tr>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td>{d.firstName}</td>
            <td>{d.surname}</td>
            <td>{d.email}</td>
            <td>{d.roomId}</td>
            <td>{d.checkInDate}</td>
            <td>{d.checkOutDate}</td>
            <td>
              {moment(d.checkOutDate).diff(moment(d.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
