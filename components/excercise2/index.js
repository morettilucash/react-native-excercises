import React, { useState } from 'react';
import { Button } from 'react-native';
import { UserProvider } from './UserContext';
import { Page1, Page2, Page3 } from './Pages';

function ChoosePage({ page }) {
    const Page = [Page1, Page2, Page3][page];
    return <Page />;
}

function Excercise2() {
    const [page, setPage] = useState(0);
    return (
        <UserProvider>
            <Button
                onPress={() => setPage(0)}
                disabled={page === 0}
                title={"Page 1"} />

            <Button
                onPress={() => setPage(1)}
                disabled={page === 1}
                title={"Page 1"} />

            <Button
                onPress={() => setPage(2)}
                disabled={page === 2}
                title={"Page 1"} />

            <ChoosePage page={page} />

        </UserProvider>
    );
}
export default Excercise2;