import React from 'react';
import { onChange } from '../../state/actions/form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useIntl} from 'react-intl';

const CountrySelect = (props) => {
    const dispatch = useDispatch();
    const { form, preferences } = useSelector(
        (state) => ({
            form: state.form,
            preferences: state.preferences,
        }), shallowEqual
    );
    const intl = useIntl();
    const countryList = {
        "tr": [
            { value: "TR", title: "Türkiye" },
            { value: "US", title: "Amerika Birleşik Devletleri" },
            { value: "GB", title: "Birleşik Krallık" },
            { value: "DE", title: "Almanya" },
            { value: "SE", title: "İsviçre" },
            { value: "KE", title: "Kenya" },
            { value: "BR", title: "Brezilya" },
            { value: "ZW", title: "Zimbabve" }
        ],
        "en": [
            { value: "TR", title: "Turkey" },
            { value: "US", title: "United States of America" },
            { value: "GB", title: "United Kingdom" },
            { value: "DE", title: "Germany" },
            { value: "SE", title: "Sweden" },
            { value: "KE", title: "Kenya" },
            { value: "BR", title: "Brazil" },
            { value: "ZW", title: "Zimbabwe" }
        ]
    }
    return <Autocomplete
    value={form.country}
      options={countryList[preferences.locale]}
      getOptionLabel={(option) => option.title}
      style={{ width: "100%", marginBottom:15 }}
      renderInput={(params) => <TextField {...params} label={intl.formatMessage({id:"Home.ulke"})} variant="outlined" />}
      onChange={(event, value) => dispatch(onChange("country", value))}
    />
}
export default CountrySelect;