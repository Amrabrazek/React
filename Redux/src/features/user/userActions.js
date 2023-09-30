import { FIRSTNAME, LASTNAME } from "./userConstants";

export function changefirstname(first_name) {
    return{
        type: FIRSTNAME,
        payload: first_name
    }
}

export function changelastname(last_name) {
    return{
        type: LASTNAME,
        payload: last_name
    }
}
