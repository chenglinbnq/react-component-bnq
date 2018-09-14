import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Component extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>1231</div>
        );
    }
}

Component.propTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func,
    placeholder: PropTypes.string,
    inputRef: PropTypes.func
}

export default Component;
