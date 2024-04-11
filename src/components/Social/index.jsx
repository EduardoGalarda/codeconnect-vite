/* eslint-disable react/prop-types */

const Social = ({link, name}) => {

    return(
        <li>
           
            <img src={`/${name}.svg`} alt={`icone do ${name}`} />
            
            <a href={link}> {name} </a>

        </li> 
    )
}

export default Social