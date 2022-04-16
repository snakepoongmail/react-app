import React, { useEffect,useState } from 'react';

const App = () => {
    const [msg, setMsg] = useState("no message");
    useEffect(
        ()=>{
            console.log('app mounted');
            const event = window.addEventListener('hashchange',()=>{
                setMsg('hash changed')
            });
            return ()=>{
                console.log('app unmounted');
                window.removeEventListener('hashchange',event);
            };
        }
        ,[]);
    return (
        <div>
            {msg}
        </div>
    );
};

export default App;