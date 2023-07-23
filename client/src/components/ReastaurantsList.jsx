import React from "react";

const ReastaurantsList = () => {
  return (
    <div>
      <div className="list-group"></div>
      <table className="table table-hover table-dark">
        <thead className="table-light">
          <tr className="bg-primary">
            <th scope="col">Reastaurants</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mcd</td>
            <td>SantaAna</td>
            <td>$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Editing</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReastaurantsList;
