import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectCurrency, setSelectCurrency] = useState(currency);

    const handlecURRENCYChange = (event) => {
        setSelectCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className={`alert alert-success`}>
            {/* <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelectCUR">Currency </label>
            </div> */}
            <label htmlFor="inputGroupSelectCUR">Currency </label>
            <select className={`alert alert-success`} id="inputGroupSelectCUR" onChange={handlecURRENCYChange} value={selectCurrency}>
                <option value="$" name="dolar">$ DOLLAR</option>
                <option value="£" name="pound">£ POUND</option>
                <option value="€" name="euro">€ EURO</option>
                <option value="₹" name="ruppe">₹ RUPPEE</option>
            </select>
        </div>

    );
};
export default Currency;
