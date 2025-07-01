import React from 'react';

const CustomCheckbox = ({ className, checked, onChange }) => {
  return (
    <div
      className={`custom-checkbox ${className} ${checked ? 'checked' : ''}`}
      onClick={onChange}
    >
      {checked && (
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomCheckbox;
