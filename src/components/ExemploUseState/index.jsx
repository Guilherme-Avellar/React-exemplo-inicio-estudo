// exemplo prático da hook useState, e da mecânica de atualização do React

import './exemploUseState.css';
import { useState } from 'react';

export default function ExemploUseState() {

    const [contarUseState, setCount] = useState(0);
    var contarPadrao = 0;
  
    /*
      Essa função é chamada toda vez que o botão é clicado. É um Exemplo prático
      do porquê usar o useState, e não o método padrão de atualização do React
    */
    const aoClicar = () => {
      setCount(contarUseState + 1);
      contarPadrao = contarPadrao + 1;
    }
  
    return (
      <div>
        <p className='comUse'>contagem COM useState: {contarUseState}</p>
        <p className='semUse'>contagem SEM useState: {contarPadrao}</p>
        <button onClick={aoClicar}>Aumentar números</button>

        <p>Por causa da mecânica básiaca do React, não é possível atualizar<br/>
          uma tela de forma padrão já conhecida. É preciso usar o useState<br/>
          que é algo que o próprio React disponibiliza.
        </p>
        <p>Já começa diferente pois não é possivel "pegar" o elemento de forma<br/>
            padrão, por que o código "JS já vai dentro das tags", então não há <br/>
            manipulação do DOM. Não se usa, por exemplo, o <strong>document.getElementById</strong>
        </p>
      </div>
    );
}
