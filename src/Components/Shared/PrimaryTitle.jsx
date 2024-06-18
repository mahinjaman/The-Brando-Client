import React from 'react';
import PropTypes from 'prop-types'
const PrimaryTitle = ({children}) => {
    return (
      <p className="text-[#fdba74] flex flex-col justify-center items-center gap-3 font-serif text-lg">
        <hr className="border border-[#fdba74] w-16" />
        {children}
      </p>
    );
};

PrimaryTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PrimaryTitle;