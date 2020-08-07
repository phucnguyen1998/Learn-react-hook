import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const [value, setValue] = useState('')
    const { onSubmit } = props;

    function handChangeValue(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (onSubmit) {
            const formValue = {
                title: value
            }
            onSubmit(formValue)
            setValue('')
        } else {
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handChangeValue} />
        </form>
    );
}

export default TodoForm;