export const addBizz = (bizzes) => {
  return async (dispatch) => {
    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=AIzaSyB7FX3rFRHzeng8svfr6mX8lWEV8iVh8cM&address=${bizzes.address}`
    )
      .then((res) => res.json())
      .then((response) => {
        bizzes.lat = response.results[0].geometry.location.lat;
        bizzes.lng = response.results[0].geometry.location.lng;
        const action = {
          type: "ADD_BIZZ",
          value: bizzes,
        };
        dispatch(action);
      });
  };
};

export const removeBizz = (index) => {
  return {
    type: "REMOVE_BIZZ",
    value: index,
  };
};

export const login = (bool) => {
  return {
    type: "LOGIN",
    value: bool,
  };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    value: username,
  };
};
