import Title from './Title'

export const ItemlistContainer = (props) =>{
    console.log(props)
    return(
        <Title greeting={props.texto} />
    );
}

export default ItemlistContainer