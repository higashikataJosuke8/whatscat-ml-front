import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem"

const CatBreedResult = ({ catBreedResultsList }) => {
  return (
    <>
      {catBreedResultsList.map((cat) => (
        <ListItem key={cat.id.toString()} catItem={cat}/>
      ))}
      
    </>   
  )
}

CatBreedResult.propTypes = {
  catBreedResultsList: PropTypes.array
}

export default CatBreedResult
