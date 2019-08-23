import {
    INCREMENT,
    DECREMENT
} from '../types';

export const increment = function (){
    return {type: INCREMENT}
}
export const decrement = function (){
    return {type: DECREMENT}
}