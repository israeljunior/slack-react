import React from 'react';

/* Importing components */
import MessageGroup from './MessageGroup';
import Message from './Message';

const styles = {
    chat: {
        flex: 1,
        height: '100%',
        overflowY: 'scroll',
        fontFamily: 'Lato'
    }
}

export default class Chat extends React.Component {
    render() {
        return (
            <div style={styles.chat}>
                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="dolor sit amet, consectetur" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur." />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas." />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="dolor sit amet, consectetur" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur." />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas." />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="dolor sit amet, consectetur" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur." />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas." />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="dolor sit amet, consectetur" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur." />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error officia aliquam quo! Nostrum sit dolorem, neque porro deserunt voluptatem, ipsam necessitatibus beatae blanditiis dignissimos voluptas." />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="israel" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                    <Message message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>

                <MessageGroup>
                    <Message avatar="http://placehold.it/36" user="john" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, vitae?" />
                </MessageGroup>
            </div>
        )
    }
}