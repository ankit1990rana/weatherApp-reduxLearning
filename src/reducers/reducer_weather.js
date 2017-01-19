import React, { Component } from 'react';
import promiseMiddleware from 'redux-promise';
import { FETCH_WEATHER } from '../actions/index';
export default function WeatherReducer(state = [], action){
    
    switch(action.type){
        case FETCH_WEATHER :
            return action.payload.then((data) => {
                return[ data, ...state ]
            });
            
    }
    
    return state;
}