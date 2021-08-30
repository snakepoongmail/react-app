import React from 'react'

const withNLS = () =>{
    return (
        <>
          <p>
            locale:  {window.locale}
            </p>  
        </>
    );
}

export default withNLS;