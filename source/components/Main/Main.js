import React from 'react';

/* Importing components */
import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import Field from '../Chat/Field';

const styles = {
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    }
}

export default class Main extends React.Component {
    render() {
        return (
            <div style={styles.main}>
                <Header name="#general" description="Company-wide announcements and work-based matters" />
                <Chat/>
                <Field/>
            </div>
        )
    }
}