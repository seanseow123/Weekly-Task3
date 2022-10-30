import React from "react";
import _ from 'lodash';

const Lodash = () => {

    const arrOne = [{
        id: 20,
        name: 'alex'

    }, {
        id: 30,
        name: 'alina'
    }];

    const arrTwo = [{
        id: 40,
        name: 'hello'
    }, {
        id: 30,
        name: 'world'
    }]

    const str = ['u', 'ec']
    const arr = [{
        storageVal: 'u',
        table: ['E', 'F']
    }, {
        storageVal: 'data',
        id: 3
    }, {
        storageVal: 'ec',
        table: ['E']
    }]

    const a = [['E'], ['F']];
    console.log(a);

    // const t = ['E', 'F'], [['F'], ['G']];
    // console.log(t);

    const updateArray = () => {
        let symDiff = _.xorBy(arrOne, arrTwo);
        console.log(symDiff);

        let flatten = _.flatten(a);
        console.log(flatten);

        let findTables = _.map(arr, 'table');
        console.log(findTables);
    }

    return (
        <>
            <button onClick={updateArray}>Update Array</button>
        </>
    )
};


export default Lodash;