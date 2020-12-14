import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from './UserContext';

function Username() {
    const user = useContext(UserContext);
    return (
        <View>
            <Text>
                Logged in as {user.name}
            </Text>
        </View>
    );
}

export function Page1() {
    return (<>
        <Text>Page 1</Text>
        <Username />
    </>);
}

export function Page2() {
    return (<>
        <Text>Page 2</Text>
        <Username />
    </>);
}

export function Page3() {
    return (<>
        <Text>Page 3</Text>
        <Username />
    </>);
}