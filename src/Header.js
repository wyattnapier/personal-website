import './Header.css';
import WyattTree from './treeWyatt.jpg';

export default function Header () {
    return (
        <div className="Header">
            <h1>Hello World</h1>
            <p>My name is Wyatt Napier and I made this website! <br /> 
            I am studying computer science at Boston University.</p>
            <body>
                Hi, my name is Wyatt and I made this website!
                I am a rising sophomore at Boston University studying computer science so I spent a little bit of time this summer trying to learn how to use React.js. 
                I’ve made a couple projects as the culmination of my learning, and this is one of them. <br />
                By the way, this is me on the right.
            </body>
            <br />
            <p>This is me! 
                <img src={WyattTree} className="Header-Image" alt="Wyatt Napier" /> </p>
            <body>
                I am from Vermont, so in my free time I love to be active and go outdoors. 
                I also lift weights a lot and have my first powerlifting meet in November. 
                I’m excited, but also very nervous. 
                I also love listening to music and giving people recommendations.
                Maybe not the best passions for a computer science major, but if I get my act together I’ll embed a Spotify playlist I made with some recommendations. 
                For now I’ll just throw the link up.
            </body>
            <body>


            </body>
        </div>
    );
}