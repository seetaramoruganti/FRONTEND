import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>You have 0 places posted !</h2>
          <button>Share a Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          coordinates={place.location}
          image={place.imageUrl}
          creatorId={place.creator}
          address={place.address}
          title={place.title}
          description={place.description}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
