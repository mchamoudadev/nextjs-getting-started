import React from 'react';

const ColorsLayout = ({ children }) => {
    return (
        <div>
            <nav className='flex items-center justify-between bg-green-100 p-4'>
                <h1>Logo</h1>
                <ul>
                    <span>Hell</span>
                    <span>Hamuuda</span>
                </ul>
            </nav>

            {children}

        </div>
    );
};

export default ColorsLayout;