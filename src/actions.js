import redux from 'redux'
import axios from 'axios'

export const actionLoadDataSuccess = (data) => {
	console.log('actionLoadDataSuccess')
	return {
		type: 'LOAD_SUCCESS',
		payload: data,
	}
}

export const actionLoadData = () => {
	console.log('actionLoadData')
	return { type: 'LOADED_REQUEST'}
}


export const actionLoadDataError = () => {
	console.log('actionLoadDataError')
	return { type: 'LOADED_ERROR'}
}


// функция экшн криетор
export const loadData = () => {
	
	return dispatch => { 	    //  диспатчим в стор функцию
  	 dispatch(actionLoadData())	
  	 axios('https://api.randomuser.me/?results=5')
      .then(response => dispatch(actionLoadDataSuccess(response.data.results))) 
      .catch(error => dispatch(actionLoadDataError()))
  }
}

