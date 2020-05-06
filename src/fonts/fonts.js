import { createGlobalStyle } from 'styled-components';

import Jaapokkienchance from './Jaapokkienchance-Regular.otf';

export default createGlobalStyle` 
    @font-face {
        font-family: 'Jaapokkienchance';
        src: local('Jaapokkienchance'), url(${Jaapokkienchance}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`
