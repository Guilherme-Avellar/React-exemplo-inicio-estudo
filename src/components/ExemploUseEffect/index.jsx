import './styles.css';

// Exemplo de uso da hook useEffect

// OBS: É necessário retirar o stict mode do main.jsx para que o useEffect funcione
import { useEffect } from 'react';
import { useState } from 'react';

export default function exemplo_useEffect() {


  // Sempre recebe uma função anônima como primeiro parâmetro, neste caso, uma arrow function
  useEffect(() => {
    console.log("\n(1º useEffect) Esse console.log é executado toda vez que o componente é renderizado");
  })

  // O segundo parâmetro é um array de dependências, que são as variáveis que, quando mudadas, fazem com que o useEffect seja executado
  useEffect(() => {
    console.log("\n(2º useEffect) Esse console.log é executado apenas quando o componente é criado");
  }, [])
  /*
   Se o array de dependências estiver vazio, o useEffect é executado apenas uma vez, quando o componente é montado
   Se o array de dependências NÃO for passado, o useEffect é executado toda vez que o componente é renderizado
   Se o array de dependências tiver alguma variável, o useEffect é executado toda vez que a variável mudar
  */

  // Exemplo de uso do array de dependências (e o useEffect apenas com 1 parâmetro) com a atualização pelo useState:
  const [count, setCount] = useState(0);
  const mudar = () => {
    setCount(count + 1);
  }

  const [count2, setCountUma] = useState(0);
  const mudarUma = () => {
    setCountUma(count2 + 1);
  }

  useEffect(()=> {
    console.log("\n(3º useEffect) Esse console.log é executado apenas quando sua variável mudar (count2) e quando é criado");
  }, [count2])

  useEffect(() => {
    return () => {
      console.log("\n(4º useEffect) Esse console.log é executado quando o componente é desmontado");
    }
  })
  // Repare no return e na arrow function dentro do useEffect, isso é uma função de limpeza, que é executada quando o componente é desmontado


  return (
    <>
      <button onClick={mudar}>Clique para mudar o estado</button>
      <p>variavel que não está em nenhum useEffect: {count}</p>
      <button onClick={mudarUma}>Clique para mudar a variavel de dependecia de 1</button>
      <p>variavel que está em apenas um useEffect: {count2}</p>
      <p>
        Funcionamento do "{"useEffect(( ) => { }, [ ])"}":<br/><br/>
        1- O primeiro parametro é uma função anônima que é executada toda vez que o componente é renderizado<br/>
        2- O segundo parâmetro é um array de dependências, que são as variáveis que, quando mudadas, fazem com que o useEffect seja executado<br/><br/>
        Se o array de dependências estiver vazio, o useEffect é executado apenas uma vez, quando o componente é montado<br/>
        Se o array de dependências NÃO for passado, o useEffect é executado toda vez que o componente é renderizado<br/>
        Se o array de dependências tiver alguma variável, o useEffect é executado toda vez que a variável mudar<br/>
      </p>
    </>
  );
}