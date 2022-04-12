import { createGlobalStyle } from 'styled-components';

import SFPRODISPLAYREGULAR from './SFPRODISPLAYREGULAR.OTF';


export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${SFPRODISPLAYREGULAR}) format('opentype'),
        font-weight: 300;
        font-style: normal;
    }
`;