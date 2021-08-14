import React from 'react';
import { onChange } from '../../state/actions/form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const TextArea = (props) => {
    const dispatch = useDispatch();
    const { form } = useSelector(
        (state) => ({
            form: state.form
        }), shallowEqual
    );
    return <TextField 
    multiline 
    rows={4} 
    style={{ width: "100%", marginBottom:15 }} 
    type={props.type} 
    label={props.label} 
    variant="outlined" 
    required 
    error={form[props.name] === ""}
    onChange={props.formchange ? (e) => { dispatch(onChange(props.name, e.target.value)); props.formchange && props.formchange()} : (e) => dispatch(onChange(props.name, e.target.value))} value={form[props.name]} />
}
export default TextArea;