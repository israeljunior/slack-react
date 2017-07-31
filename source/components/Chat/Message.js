import React from 'react';

const styles = {
    messageWrap: {
        display: 'flex',
        padding: '5px 25px 5px 0',
        margin: '1px 0 0 0',
    },
    
    avatar: {
        borderRadius: 4,
        overflow: 'hidden',
        height: 36,
        width: 36,
        margin: '0 10px 0 26px'
    },

    meta: {
        display: 'flex',
        margin: '0 10px 0 0'
    },

    user: {
        fontWeight: '900',
        fontSize: '15px',
        color: 'black'
    },

    time: {
        color: '#9e9ea6',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '18px',
        margin: '0 7.5px'
    },

    star: {
        backgroundColor: '#ccc',
        width: 16,
        height: 16
    },

    message: {
        flex: 1,
        color: '#555459',
        lineHeight: '22px',
        fontWeight: '400'
    }
}

export default class Message extends React.Component {
    render() {
        return (
            <div style={styles.messageWrap}>
                {this.props.avatar ? 
                <div style={styles.avatar}>
                    <img src={this.props.avatar} />
                </div>
                :''}

                <div style={{flexDirection: this.props.user ? 'column' : 'row', display: 'flex' }}>
                    <div style={styles.meta}>
                        {this.props.user ? 
                        <div style={styles.user}>
                            {this.props.user}
                        </div>
                        :''}

                        <div style={styles.time}>
                            {"10:25"}
                        </div>

                        <div style={styles.star}>
                        </div>
                    </div>

                    <div style={styles.message}>
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
}