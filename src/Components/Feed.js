import {useContext} from 'react'
import {ThemeContext} from '../App'

function Feed(){

    const style = useContext(ThemeContext)
    console.log(style)
    return(
        <>
            <button style={style.theme}>
                hello
            </button>
        </>
    )
}
export default(Feed)