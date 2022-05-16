import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [curMessage, newMessage] = useState(-1);

    const callback = (messageId: number) => {
        newMessage(messageId);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            newMessage(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {curMessage}
        </div>
    );
}
