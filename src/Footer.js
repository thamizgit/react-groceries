import './App.css';
function Footer({length}){
    return(
        <footer>{length != 1 ? `List has ${length} items ` : `List has ${length} item` } </footer>
    )
}
export default Footer;