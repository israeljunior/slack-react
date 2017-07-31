import React from 'react';

const styles = {
    divider: {
        
    }
}

export default class Divider extends React.Component {
    render() {
        return (
            <div style={styles.divider}>
                <hr/>

                <span>
                    {this.props.label}
                </span>
            </div>
        )
    }
}