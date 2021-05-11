import React, { FC } from 'react';

// this arrow icon points left
const ArrowIcon: FC<any> = (props): JSX.Element => (
  <svg
    fill="#fff"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.78127 11.29L14.8283 4.24303C15.2188 3.8525 15.852 3.8525 16.2425 4.24303C16.633 4.63355 16.633 5.26672 16.2425 5.65724L9.87891 12.0208L16.2425 18.3844C16.633 18.7749 16.633 19.4081 16.2425 19.7986C15.852 20.1891 15.2188 20.1891 14.8283 19.7986L7.78057 12.7509C7.7727 12.7435 7.76491 12.736 7.75723 12.7283C7.56873 12.5398 7.47122 12.2948 7.46468 12.0478C7.45748 11.7828 7.55498 11.5156 7.7572 11.3133C7.76513 11.3054 7.77315 11.2977 7.78127 11.29Z"
    />
  </svg>
);

export default ArrowIcon;
