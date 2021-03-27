import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected(!selected);
  };

  const onButtonClick = event => {
    event.stopPropagation();
    props.setCustomerId(props.searchResult.id);
  };

  return (
    <tr onClick={onClick} className={selected ? "selected" : ""}>
      <td>{props.searchResult.id}</td>
      <td>{props.searchResult.title}</td>
      <td>{props.searchResult.firstName}</td>
      <td>{props.searchResult.surname}</td>
      <td>{props.searchResult.email}</td>
      <td>{props.searchResult.roomId}</td>
      <td>{props.searchResult.checkInDate}</td>
      <td>{props.searchResult.checkOutDate}</td>
      <td>
        {moment(props.searchResult.checkOutDate).diff(
          moment(props.searchResult.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={onButtonClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResult;
