import {setGlobal} from 'reactn';
import avengerInfo from '../data/avengerInfo';

export default () => {
    setGlobal({
        avengers: avengerInfo,
        avengersLocated: [null],

    })
};