import React from 'react';

const styles = {
    button: {
        display: 'inline-block'
    }
}

export default class Button extends React.Component {
    render() {
        return (
            <button style={styles.button}>
            </button>
        )
    }
}