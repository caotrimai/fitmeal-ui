import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FormSeparator.scss'

FormSeparator.propTypes = {
    content: PropTypes.string,
};

function FormSeparator(props) {
    const { content } = props
    return (
        <div className="form-separator">
            <div className="dash"></div>
            <div className="content">{content}</div>
            <div className="dash"></div>
        </div>
    );
}

export default FormSeparator;