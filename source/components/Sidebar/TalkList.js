import React from 'react';

const styles = {
    talkList: {

    },

    title: {
        textTransform: 'uppercase',
        padding: 0,
        height: '24px',
        fontSize: '13px',
        fontWeight: '500',
        margin: '35px 0 0 16px'
    }
}

export default class TalkList extends React.Component {
    render() {
        return (
            <div style={styles.talkList}>
                <h3 style={styles.title}>
                    {this.props.title}
                </h3>

                {this.props.children}
            </div>
        )
    }
}