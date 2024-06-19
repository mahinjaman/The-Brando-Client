import React from 'react';
import PropTypes from 'prop-types'
const PrimaryTitle = ({children}) => {
    return (
      <p className="text-[#c4a676] flex flex-col justify-center items-center gap-3 font-serif text-lg">
        <hr className="border border-[#c4a676] w-16" />
        {children}
      </p>
    );
};

PrimaryTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PrimaryTitle;