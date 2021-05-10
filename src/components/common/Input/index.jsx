import React from 'react';
import './index.scss';

export const Input = ({
    className = '',
    id,
    label,
    type = 'text',
    icon,
    value,
    defaultValue,
    name,
    error,
    errorMessage,
    disabled = false,
    placeholder = 'Please enter the value...',
    onChange = () => {},
    loading = false,
    viewOnly = false,
    maxLength = 200,
    autoComplete = 'off',
    refs,
    ...rest
}) => {

    return (
        <div id={id} className={`tr__field ${className} ${disabled ? 'disabled' : ''}`}>
            {label && (
                <label htmlFor={name}>{label}</label>
            )}
            <div className="tr__field--wrapper">
                {viewOnly ? (
                    <p className="label">{defaultValue || value}</p>
                ) : (
                    <input
                        key={defaultValue}
                        type={type}
                        name={name}
                        id={name}
                        className={`tr__field-input ${error ? 'error' : ''}`}
                        placeholder={disabled ? '' : placeholder}
                        autoComplete={autoComplete}
                        ref={refs}
                        onChange={onChange}
                        value={value}
                        defaultValue={defaultValue}
                        maxLength={maxLength}
                        {...rest}
                    />
                )}
            </div>

            <p
                className={`error ${error && errorMessage && 'active'}`}
            >{errorMessage}</p>
        </div>
    )
};
