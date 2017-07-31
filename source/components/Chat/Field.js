import React from 'react';

const styles = {
    chat: {
        padding: '20px',
        fontFamily: 'Lato',
        display: 'flex'
    },

    field: {
        border: '2px solid #717274',
        borderRadius: 4,
        padding: '9px 12px',
        color: '#9F9F9F',
        display: 'flex',
        width: '100%'
    }
}

export default class Chat extends React.Component {
    render() {
        return (
            <div style={styles.chat}>
                <div style={styles.add}>

                </div>
                
                <div style={styles.field}>
                    <button style={styles.add}>
                    </button>

                    <input style={styles.input} type="text" value="Message @user"/>

                    <button style={styles.emoji}>
                    </button>
                </div>
            </div>
        )
    }
}