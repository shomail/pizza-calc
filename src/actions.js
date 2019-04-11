import AppDispatcher from './AppDispatcher'

export const UPDATE_NUMBER_OF_PEOPLE = 'UPDATE_NUMBER_OF_PEOPLE';
export const UPDATE_SLICES_PER_PERSON = 'UPDATE_SLICES_PER_PERSON';
export const RESET_STATE = 'RESET_STATE'

export const updateNumberOfPeople = (value) => {
    AppDispatcher.dispatch({
        type: UPDATE_NUMBER_OF_PEOPLE,
        value
    })
}

export const updateSlicesPerPerson = (value) => {
    AppDispatcher.dispatch({
        type: UPDATE_SLICES_PER_PERSON,
        value
    })
}

export const reset = () => {
    AppDispatcher.dispatch({
        type: RESET_STATE,
    })
}