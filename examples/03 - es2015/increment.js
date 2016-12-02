import {add} from './math';

exports.increment = val => {
    return add(val, 1);
};