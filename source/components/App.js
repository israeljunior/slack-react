import React from 'react';

/* Importing components */
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const styles = {
    app: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: '100%',
        flex: 1
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div style={styles.app}>
                <Sidebar />
                <Main />
            </div>
        )
    }
}