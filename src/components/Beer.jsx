"use client";

import { useEffect, useState } from "react";

export default function Beer() {
  const [beer, setBeer] = useState([]);
  const [showBeer, setShowBeer] = useState({});

  async function fetchBeer() {
    const res = await fetch("https://random-data-api.com/api/v2/beers?size=20");
    const data = await res.json();
    setBeer(data);
  }

  useEffect(() => {
    fetchBeer();
  }, []);

  function handleChange(e) {
    for (let i = 0; i < beer.length; i++) {
      if (e.target.value === beer[i].name) {
        setShowBeer(beer[i]);
      }
    }
  }

  return (
    <div>
      <h2>Beer</h2>
      <p>
        Here's an API to fetch 20 beers:
        <a href="https://random-data-api.com/api/v2/beers?size=20">
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>

      <label>Choose your favorite one to see its details.</label>
      <br />
      <br />
      <select value={showBeer} onChange={handleChange}>
        <option value="">Select a beer!</option>
        {beer.map((choosenBeer) => {
          return (
            <option key={choosenBeer.uid} value={choosenBeer.name}>
              {choosenBeer.name}
            </option>
          );
        })}
      </select>

      {showBeer.name ? (
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>brand</th>
              <th>name</th>
              <th>style</th>
              <th>hop</th>
              <th>yeast</th>
              <th>malts</th>
              <th>ibu</th>
              <th>alcohol</th>
              <th>blg</th>
            </tr>
            <tr>
              <td>{showBeer.id}</td>
              <td>{showBeer.uid}</td>
              <td>{showBeer.brand}</td>
              <td>{showBeer.name}</td>
              <td>{showBeer.style}</td>
              <td>{showBeer.hop}</td>
              <td>{showBeer.yeast}</td>
              <td>{showBeer.malts}</td>
              <td>{showBeer.ibu}</td>
              <td>{showBeer.alcohol}</td>
              <td>{showBeer.blg}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        " :) "
      )}
    </div>
  );
}
