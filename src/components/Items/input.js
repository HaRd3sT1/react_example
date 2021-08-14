import React from 'react';
import { onChange } from '../../state/actions/form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
    const dispatch = useDispatch();
    const { form } = useSelector(
        (state) => ({
            form: state.form
        }), shallowEqual
    );
    return <TextField
    style={{ width: "100%", marginBottom:15 }} 
    type={props.type} 
    label={props.label} 
    variant="outlined" 
    required 
    onChange={props.formchange ? (e) => { dispatch(onChange(props.name, e.target.value)); props.formchange && props.formchange()} : (e) => dispatch(onChange(props.name, e.target.value))} 
    value={form[props.name]} 
    error={props.type == "number" ? !Number(form[props.name]) : form[props.name] === ""}
    />
}
export default Input;