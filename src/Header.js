import './Header.css';
import WyattTree from './treeWyatt.jpg';

export default function Header () {
    return (
        <div className="Header">
            <h1>Hello World</h1>
            <p>My name is Wyatt Napier <br /> 
            I am studying computer science at Boston University.</p>
            <br />
            <p>This is me! 
                <img src={WyattTree} className="Header-Image" alt="Wyatt Napier" /> </p>
        </div>
    );
}