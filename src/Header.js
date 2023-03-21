function Header(props){
    return(
        <header>{props.title}</header>
    );
    
}
Header.defaultProps = {
    title:"Default Title"
}

export default Header;