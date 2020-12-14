import React, { useState } from 'react';
import {
    Button
} from 'react-native';
import User from './User';

const ShowHideUser = ({ show }) => (show ? <User /> : null);

const ExcerciseOne = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                onPress={() => setShow(!show)}
                title={show ? "Hide User" : "Show User"} />

            <ShowHideUser show={show} />
        </>
    );
};


export default ExcerciseOne;
