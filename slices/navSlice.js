import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin: null,
    destnation: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state, action) =>{
            state.origin = action.payload;
        },
        setDestination: (state, action) =>{
            state.destnation = action.payload;
        },
        setTravelTimeInformation: (state, action) =>{
            state.travelTimeInformation = action.payload;
        },
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;


//Selector
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destnation;
export const selectOrigsetTravelTimeInformationin = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;