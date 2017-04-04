import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const Main = () => {
    return (
        <App/>
    );
}

ReactDOM.render(<Main/>, document.getElementById('mount-point'));