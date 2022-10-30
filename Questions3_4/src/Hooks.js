import React, { useState } from "react";

const Hooks = () => {

    const [cars, setCars] = useState([{
        id: 1, brand: 'Mercedes', color: 'Black'
    } , {
        id: 2, brand: 'BMW', color: 'White'
    } , {
        id: 3, brand: 'Toyota', color: 'Blue'
    } , {
        id: 4, brand: 'Honda', color: 'Grey'
    } , {
        id: 5, brand: 'Renault', color: 'Red'
    }
]);

    const [employee, setEmployee]= useState({
        id: 101,
        name: 'Sean',
        department: 'IT',
        salary: '3000'
    });

    const arrayUpdate = () => {
        const updateCarsArray = [...cars];
        updateCarsArray[2].brand = 'Volvo';
        updateCarsArray[2].color = 'Pink';
        setCars(updateCarsArray);

        setEmployee({ ...employee, department: 'Accounts', salary: '2500' });
    }

    const carsList = cars.map(info => {
            return (
                <React.Fragment key={info.id}>
                    <p>ID: {info.id}</p>
                    <p>Brand: {info.brand}</p>
                    <p>Color: {info.color}</p>
                </React.Fragment>
            )
        }
        );

    return (
        <>
            <h3><u>Question 3a</u></h3>
            {carsList}
            <br></br>
            <hr></hr>
            <h3><u>Question 3b</u></h3>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Department: {employee.department}</p>
            <p>Salary: {employee.salary}</p>
            <button onClick={arrayUpdate}>Update Array</button>
        </>
    )
}

export default Hooks;