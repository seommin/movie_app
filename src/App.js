import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Bulgogi",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6863296&psig=AOvVaw1EsKoMR9EBHujnX9i5h2us&ust=1602147265977000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi12eeNouwCFQAAAAAdAAAAABAD",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Kimbap",
    image:
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fgimgane.co.kr%2F&psig=AOvVaw35eoGmMUvLBbJFq7ATm1XV&ust=1602147236460000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC1qtqNouwCFQAAAAAdAAAAABAD",
    rating: 3.9,
  },
  {
    id: 4,
    name: "Samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.2,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
