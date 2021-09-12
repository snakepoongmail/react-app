import React from 'react';

const lazyLoading = () => {
    const lazyload = () => {
        import('./component').then(
            data=>{
                //es6 草案中的语法 jsonp 实现动态加载文件
                console.info(data.nls_string)
            }
            );
    };
    return (
        <>
            <button onClick={lazyload}>lazy load</button>
        </>
    );
};

export default lazyLoading;
