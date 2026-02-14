import React, { createContext } from 'react'


export const timeDates = createContext()

export default function Datetime({ children }) {

     function getDayName(datestring) {

        if (!datestring) return "";
        return new Date(datestring).toLocaleDateString("en-Us", {
            weekday: "long"

        });

    }

     function formatTime(timestr) {
        if (!timestr) return "";
        const date= new Date(`1970-01-01T${timestr}`)
        return  date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
    }
 function formaDateTime(datestring, timestr) {
        const day = getDayName(datestring)
        const times = formatTime(timestr)
        return `${day},${times}`
    }



return (
    <div>
        <timeDates.Provider value={{
            getDayName,
            formatTime,
            formaDateTime

        }}>
            {children}
        </timeDates.Provider>

    </div>
)

}