import React from 'react';
import './styleLoading.css';

export const Loading = () => {
    return (
        <div className="center1 container1">
        <div className="loadContainer1">
            <div className="loader2"></div>
            <div className="loader3"></div>
            <div className="loader4"></div>
        </div>
        <div><span className="loading">
            Loading...</span></div>
    </div >
    );
};
