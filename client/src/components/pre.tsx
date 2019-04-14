import * as React from 'react';

export default function Pre(props: any) {
    return <pre>
                <code className="lang-javascript">
                    {props.children}
                </code>
            </pre>
    
};