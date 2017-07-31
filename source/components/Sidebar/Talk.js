import React from 'react';

const styles = {
    talk: {
        padding: '0 4px 0 16px',
        cursor: 'pointer',
        height: '24px'
    }
}

export default class Talk extends React.Component {
    render() {
        return (
            <div style={styles.talk}>
                {this.props.children}
            </div>
        )
    }
}