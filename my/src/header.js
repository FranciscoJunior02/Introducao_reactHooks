
/* import './App.css'; */

import './header.css';

export default function Header(props) {
  return (
    <div className="Header">
        <div className="logo">
            <p><img src= 'https://i0.wp.com/imagensemoldes.com.br/wp-content/uploads/2020/04/Desenho-Rel%C3%B3gio-de-Parede-PNG.png?fit=2682%2C2682&ssl=1'/></p>
        </div>
      <div className="desc">
        <h2> Relógio no react</h2>
        <p>Basically, this mini project consists of creating a functional clock using React hooks technology.</p>
      </div>
    </div>
  );
}

