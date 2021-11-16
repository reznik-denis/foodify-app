import { css } from '@emotion/react';
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  color: #c4c4c4;
`;

function Loader() {
  return (
    <FadeLoader color={'#c4c4c4'} loading={true} css={override} height={35} width={10} radius={20} margin={20} />
  );
}

export default Loader;
