import { css } from '@emotion/react';
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  return (
    <ClipLoader color={'#ffffff'} loading={true} css={override} size={150} />
  );
}

export default Loader;
