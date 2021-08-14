import { createAction } from 'redux-act';
import Swal from 'sweetalert2'

export const FORM_DATA = createAction('FORM_DATA');
export const FORM_FAIL = createAction('FORM_FAIL');
export const FORM_END = createAction('FORM_END');
export const FORM_START = createAction('FORM_START');

export const onChange = (name, value) => {
    return async (dispatch) => {
        return dispatch(FORM_DATA({[name]:value}));
    };
};   
export const sendContact = (intl) => {
    return async (dispatch, getState) => {
        const { email, name, meessage, country, phone } = getState().form;
        dispatch(FORM_START());
        console.log({
            "name": name,
            "email": email,
            "phonenumber": phone,
            "country_code": country.value,
            "text": meessage,
        })
        Swal.fire(
            intl.formatMessage({id:"Home.success"}),
            intl.formatMessage({id:"Home.mesajinizGonderildi"}),
            'success'
          )
        dispatch(FORM_END());
    };
};
    
    