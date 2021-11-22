import React, {useEffect, useState} from "react";

const helloApiUrl = 'https://boiling-shelf-43750.herokuapp.com/hello';

const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch(helloApiUrl)
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;

