import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(response => response.json())
        .then(data => setCustomer(data));
    }
  }, [props.id]);

  return (
    customer && (
      <table className="customerDetails">
        <tbody>
          <tr>
            <th>Customer Id</th>
            <td>{customer.id}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{customer.phoneNumber}</td>
          </tr>
          <tr>
            <th>VIP</th>
            <td>{customer.vip.toString()}</td>
          </tr>
        </tbody>
      </table>
    )
  );
};

export default CustomerProfile;
