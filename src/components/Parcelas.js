import React from 'react';
import Parcela from './Parcela';

export default function Parcelas({ operacaoAtual, porcentagem }) {
  return (
    <div className="row">
      {operacaoAtual.map(({ mes, capital, acrescimo, acrescimoPorcentual }) => {
        return (
          <div className="col s2" key={mes}>
            <Parcela
              mes={mes}
              capital={capital}
              acrescimo={acrescimo}
              acrescimoPorcentual={acrescimoPorcentual}
              porcentagem={porcentagem}
            />
          </div>
        );
      })}
    </div>
  );
}
