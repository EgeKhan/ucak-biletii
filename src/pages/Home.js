import React from "react";
import FlightItems from "../components/FlightItems";

const flight_list = [
    { id: 'e1', kalkis: 'İzmir', varis: 'İstanbul', ucusZamani: '1 Saat', price: 564, date: new Date(2022, 10, 19) },
    { id: 'e1', kalkis: 'İstanbul', varis: 'İzmir', ucusZamani: '1.5 Saat', price: 700, date: new Date(2022, 10, 19) },
    { id: 'e1', kalkis: 'Antalya', varis: 'İstanbul', ucusZamani: '2 Saat', price: 1000, date: new Date(2022, 10, 19) },
    { id: 'e1', kalkis: 'Ankara', varis: 'Üsküp', ucusZamani: '3 saat', price: 1200, date: new Date(2022, 10, 19) },
  ];

const Home = () => {

    return(
    <div className="App">
      <FlightItems kalkis={flight_list[0].kalkis} varis={flight_list[0].varis} fTime={flight_list[0].ucusZamani} fiyat={flight_list[0].price} tarih={flight_list[0].date}>
      </FlightItems>

      <FlightItems kalkis={flight_list[1].kalkis} varis={flight_list[1].varis} fTime={flight_list[1].ucusZamani} fiyat={flight_list[1].price} tarih={flight_list[1].date}>
      </FlightItems>

      <FlightItems kalkis={flight_list[2].kalkis} varis={flight_list[2].varis} fTime={flight_list[2].ucusZamani} fiyat={flight_list[2].price} tarih={flight_list[2].date}>
      </FlightItems>

      <FlightItems kalkis={flight_list[3].kalkis} varis={flight_list[3].varis} fTime={flight_list[3].ucusZamani} fiyat={flight_list[3].price} tarih={flight_list[3].date}>
      </FlightItems>
    </div>
    );
};

export default Home;