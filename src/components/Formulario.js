import React from 'react';

export default function Formulario({
  estadoInicial,
  inicial,
  porcentagem,
  periodo,
  onChangeValor,
  onChangePorcentagem,
  onChangePeriodo,
}) {
  const {
    valorMin ,
    valorMax,
    porcentagemMin,
    porcentagemMax,
    periodoMin,
    periodoMax,
  } = estadoInicial;

  const manipulandoCapital = (event) => {
    const capitalAtual = event.target.value;
    onChangeValor(capitalAtual);
  };

  const manipulandoPorcentagem = (event) => {
    const porcentagemAtual = event.target.value;
    onChangePorcentagem(porcentagemAtual);
  };

  const manipulandoPeriodo = (event) => {
    const periodoAtual = event.target.value;
    onChangePeriodo(periodoAtual);
  };

  return (
    <div className="row">
      <div className="input-field col s4">
        <input
          id="capital_inicial"
          type="number"
          step="1"
          value={inicial}
          min={valorMin}
          max={valorMax}
          onChange={manipulandoCapital}
          className="validate"
        />
        <label className="active" htmlFor="capital_inicial">
          Capital Inicial
        </label>
      </div>

      <div className="input-field col s4">
        <input
          id="porcentagem"
          type="number"
          step="0.1"
          value={porcentagem}
          min={porcentagemMin}
          max={porcentagemMax}
          onChange={manipulandoPorcentagem}
          className="validate"
        />
        <label className="active" htmlFor="porcentagem">
          Taxa de juros mensal
        </label>
      </div>

      <div className="input-field col s4">
        <input
          id="periodo"
          type="number"
          step="1"
          value={periodo}
          min={periodoMin}
          max={periodoMax}
          onChange={manipulandoPeriodo}
          className="validate"
        />
        <label className="active" htmlFor="periodo">
          Período (meses)
        </label>
      </div>
    </div>
  );
}
