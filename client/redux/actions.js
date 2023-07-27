import {
  API_DB_FILTER,
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  GET_DOG_BY_ID,
  GET_DOGS_BY_NAME,
  RESET_FILTER,
  SORT_FILTER_A_Z,
  TEMPERAMENT_FILTER,
  SORT_FILTER_WEIGHT,
  RESET_DOG,
  RESET_LOADING,
  RESET_DOGS,
} from './actions-types.js';
import axios from 'axios';

export const getAllDogs = () => {
  return async function (dispatch) {
    const dogs = await axios.get('/dogs');
    dispatch({ 
      type: GET_ALL_DOGS, 
      payload: dogs.data 
    });
  };
};

export const getDogById = (id) => async (dispatch) => {
  try {
    const dogById = await axios.get(`/dogs/${id}`);
    return dispatch({ 
      type: GET_DOG_BY_ID, 
      payload: dogById.data 
    });
  } catch (error) {
    const dogsIdNoSearch = []
    return dispatch({ 
      type: GET_DOGS_BY_NAME, 
      payload: dogsIdNoSearch 
    });
  };
};

export const getAllTemperaments = () => async (dispatch) => {
  try {
    const allTemperaments = await axios.get('/temperaments')
    const temperamentsSorted = allTemperaments.data.sort((a, b) => a.name.localeCompare(b.name));
    return dispatch({ 
      type: GET_ALL_TEMPERAMENTS, 
      payload: temperamentsSorted 
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getDogsByName = (name) => async (dispatch) => {
  try {
    const dogsName = await axios.get(`/dogs?name=${name}`);
    return dispatch({ 
      type: GET_DOGS_BY_NAME, 
      payload: dogsName.data 
    });
  } catch (error) {
    const dogsNameNoSearch = []
    return dispatch({ 
      type: GET_DOGS_BY_NAME, 
      payload: dogsNameNoSearch 
    });
  };
};

export const sortFilterAZ = (dogs, value) => {
  try {
    let dogsSorted = []
    if (value === "ASC") {
      dogsSorted = dogs.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (value === "DESC") {
      dogsSorted = dogs.sort((a, b) => b.name.localeCompare(a.name))
    }
    return function (dispatch) {
      dispatch({ 
        type: SORT_FILTER_A_Z, 
        payload: dogsSorted 
      });
    };
  } catch (error) {
    throw new Error(error);
  };
};

export const temperamentFilter = (dogs, value) => {
  try {
    let dogFilter = []
    dogs.forEach(dog => {
      const dogTemp = [];
      if (dog.temperaments) dogTemp.push(...dog.temperaments.split(", "));
      if (dogTemp.includes(value)) dogFilter.push(dog);
    });
    return function (dispatch) {
      dispatch({ 
        type: TEMPERAMENT_FILTER, 
        payload: dogFilter 
      });
    };
  } catch (error) {
    throw new Error(error);
  };
};

export const apiDbFilter = (dogs, value) => {
  try {
    let dogFilter = []
    dogs.forEach(dog => {
      if (dog.from === value) dogFilter.push(dog);
    });
    return function (dispatch) {
      dispatch({ 
        type: API_DB_FILTER, 
        payload: dogFilter 
      });
    };
  } catch (error) {
    throw new Error(error);
  };
};

export const sortFilterLH = (dogs, value) => {
  try {
    let dogsSorted = []
    if (value === "high-low") {
      dogsSorted = dogs.sort( (a, b) => (a.minWeight < b.minWeight) 
        ? 1 : (a.minWeight > b.minWeight) ? -1 
        : 0
      );
    }
    if (value === "low-high") {
      dogsSorted = dogs.sort( (a, b) => (a.minWeight > b.minWeight) 
        ? 1 : (a.minWeight < b.minWeight) ? -1 
        : 0
      );
    }
    return function (dispatch) {
      dispatch({ 
        type: SORT_FILTER_WEIGHT, 
        payload: dogsSorted 
      });
    };
  } catch (error) {
      throw new Error(error);
  };
};

export const resetFilter = () => {
  return function (dispatch) {
    dispatch({ 
      type: RESET_FILTER 
    });
  };
};

export const resetDog = () => {
  return function (dispatch) {
    dispatch({ 
      type: RESET_DOG 
    });
  };
};

export const resetLoading = () => {
  return function (dispatch) {
    dispatch({ 
      type: RESET_LOADING 
    });
  };
};

export const resetDogs = () => {
  return function (dispatch) {
    dispatch({ 
      type: RESET_DOGS 
    });
  };
};