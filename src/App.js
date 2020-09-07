import React, { useState } from 'react';
import { useEffect } from 'react';
import Formulario from './components/Formulario';
import Parcelas from './components/Parcelas';
import { formatNumber } from './helpers/formatHelper';

export default function App() {
  const estadoInicial = {
    valorInicial: 1000,
    valorMin: 100,
    valorMax: 100000,
    porcentagemInicial: 0.5,
    porcentagemMin: -12,
    porcentagemMax: 12,
    periodoInicial: 1,
    periodoMin: 1,
    periodoMax: 36,
  };

  const [inicial, setInicial] = useState(estadoInicial.valorInicial);
  const [porcentagem, setPorcentagem] = useState(
    estadoInicial.porcentagemInicial
  );
  const [periodo, setPeriodo] = useState(estadoInicial.periodoInicial);
  const [operacaoAtual, setOperacaoAtual] = useState([]);

  useEffect(() => {
    let listaOperacaoAtual = [];

    const constrOperacaoAtual = () => {
      let capitalAtual = 0;
      let memoriaCapital = 0;
      let acrescAtual = 0;
      let acrescimoPorcentual = 0;
      const ajustePorcentagem = porcentagem / 100;
      for (let index = 0; index < periodo; index++) {
        if (index === 0) {
          capitalAtual = inicial + inicial * ajustePorcentagem;
        } else {
          capitalAtual = memoriaCapital + memoriaCapital * ajustePorcentagem;
        }
        acrescAtual = capitalAtual - inicial;
        acrescimoPorcentual = (acrescAtual * 100) / inicial;
        memoriaCapital = parseFloat(capitalAtual);
        listaOperacaoAtual.push({
          mes: index + 1,
          capital: formatNumber(Math.round(capitalAtual)),
          acrescimo: formatNumber(Math.round(acrescAtual)),
          acrescimoPorcentual: formatNumber(Math.round(acrescimoPorcentual)),
        });
        
     
      }

      salvandoOperacao(listaOperacaoAtual);  console.log(listaOperacaoAtual);
    };

    constrOperacaoAtual();
  }, [inicial, porcentagem, periodo]);



  const salvandoOperacao = (operacao) => {
    setOperacaoAtual(operacao);
  };

  const manipulandoCapital = (capitalAtual) => {
    setInicial(parseFloat(capitalAtual));
  };

  const manipulandoPorcentagem = (porcentagemAtual) => {
    setPorcentagem(parseFloat(porcentagemAtual));
  };

  const manipulandoPeriodo = (periodoAtual) => {
    setPeriodo(parseFloat(periodoAtual));
  };

  return (
    <div>
      <h1 className="center">React - Juros Compostos</h1>
      <Formulario
        estadoInicial={estadoInicial}
        inicial={inicial}
        porcentagem={porcentagem}
        periodo={periodo}
        onChangeValor={manipulandoCapital}
        onChangePorcentagem={manipulandoPorcentagem}
        onChangePeriodo={manipulandoPeriodo}
      />

      <Parcelas operacaoAtual={operacaoAtual} porcentagem={porcentagem} />
    </div>
  );
}
