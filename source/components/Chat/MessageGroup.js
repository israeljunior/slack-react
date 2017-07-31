import React from 'react';

const styles = {
    message: {
        display: 'flex',
        flexDirection: 'column'
    }
}

export default class MessageGroup extends React.Component {
    render() {
        return (
            <div style={styles.message}>
                {this.props.children}
            </div>
        )
    }
}