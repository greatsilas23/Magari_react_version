import {React, useState, useEffect} from 'react'
const Header = ({props})=> {
    const [itemLogo, setItemLogo] = useState(new Array())
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => setItemLogo(itemLogo.push(props.itemLogo)).then(setIsLoaded(true)), [])
    return(
        <div>

        
        {isLoaded
             && itemLogo.map((sector) => <section></section>)
        }
        </div>
    )
}
export default Headers