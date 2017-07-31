import React from 'react';

/* Importing components */
import TalkList from './TalkList';
import Talk from './Talk';

const styles = {
    sidebar: {
        backgroundColor: '#4D394B',
        fontFamily: 'Lato',
        fontWeight: '300',
        width: '220px',
        color: '#AB9BA9'
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <div style={styles.sidebar}>
                <TalkList title="Channels">
                    <Talk type="public">blackmirror</Talk>
                    <Talk type="public">general</Talk>
                    <Talk type="private">gogogo</Talk>
                    <Talk type="private">movies</Talk>
                    <Talk type="private">quem_tem_mac</Talk>
                    <Talk type="public">scmarketing_website</Talk>
                    <Talk type="public">scriptcase9</Talk>
                    <Talk type="private">spotify</Talk>
                    <Talk type="public">webhelp</Talk>
                </TalkList>

                <TalkList title="Direct messages">
                    <Talk type="online">caio</Talk>
                    <Talk type="online">john</Talk>
                    <Talk type="online">rennan</Talk>
                    <Talk type="offline">hugofelix</Talk>
                </TalkList>

                <TalkList title="Apps">
                    <Talk type="online">pomodoro</Talk>
                    <Talk type="online">translate</Talk>
                </TalkList>
            </div>
        )
    }
}