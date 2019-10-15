import React from 'react';
import PropTypes from "prop-types";
import { WrapperIcon } from "./style";

export const Icon = ({ hasIcon, ...props }) => {
    return (
        <WrapperIcon {...props}>{hasIcon}</WrapperIcon>
    );
}

Icon.propTypes = {
    /** Icon name from [Material Icons](https://material.io/resources/icons/?style=round) library */
    hasIcon: PropTypes.string.isRequired,
    hasColor: PropTypes.oneOf(["default", "primary", "accent", "done", "error", "alert", "progress"]),
    /** Choose a size based in font-size */
    hasSize: PropTypes.number
};

Icon.defaultProps = {
    hasColor: null,
    hasSize: null
};