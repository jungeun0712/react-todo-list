import React from 'react';

function Calendar() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.0${today.getMonth() + 1}.0${today.getDate()}`

    return (
        <>
            <h2>{formattedDate}</h2>
        </>
    );
}

export default Calendar;