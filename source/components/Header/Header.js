import React from 'react';

const styles = {
    header: {
        padding: '12px 20px',
        fontFamily: 'Lato, sans-serif',
        borderBottom: '1px solid #E8E8E8'
    },

    info: {
        display: 'flex',
        flexDirection: 'column'
    },

    name: {
        fontSize: '18px',
        color: 'black',
        fontWeight: '900',
        color: '#2C2D30',
        marginBottom: 5
    },

    meta: {
        display: 'flex',
        flexDirection: 'row'
    },

    star: {
        height: 13,
        margin: '0 5px',
        borderRight: '1px solid #C4C4C5'
    },

    users: {
        height: 13,
        margin: '0 5px',
        borderRight: '1px solid #C4C4C5'
    },

    pin: {
        height: 13,
        margin: '0 5px',
        borderRight: '1px solid #C4C4C5'
    },

    description: {
        height: 13,
        margin: '0 5px',
        color: '#717274',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '14px'
    },

    
}

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                <div style={styles.info}>
                    <div style={styles.name}>
                        {this.props.name}
                    </div>

                    <div style={styles.meta}>
                        <div style={styles.star}>
                        </div>

                        <div style={styles.users}>
                        </div>

                        <div style={styles.pin}>
                        </div>

                        <div style={styles.description}>
                            {this.props.description}
                        </div>
                    </div>
                </div>

                <div style={styles.actions}>
                    <button style={styles.phone}>
                    </button>

                    <button style={styles.info}>
                    </button>

                    <button style={styles.settings}>
                    </button>

                    <input type="search" style={styles.search}/>

                    <button style={styles.activity}>
                    </button>

                    <button style={styles.star}>
                    </button>

                    <button style={styles.more}>
                    </button>
                </div>
            </div>
        )
    }
}