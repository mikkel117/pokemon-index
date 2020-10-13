import React, {createContext, useState} from 'react'

export const VareArray = createContext()

const VareProvider = (props) => { 
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4},
    ]);


    return (
        <VareArray.Provider value={{books}}>
            {props.children}
        </VareArray.Provider>
    )

}
export default VareProvider