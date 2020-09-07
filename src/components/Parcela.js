import React from 'react';
import css from './Parcela.module.css';

export default function Parcela({
  mes,
  capital,
  acrescimo,
  acrescimoPorcentual,
  porcentagem,
}) {
  return (
    <div className="card">
      <div className={css.parcelCard}>
        <span>
          <strong>{mes}</strong>
        </span>
        <div className={css.operationBox}>
          <p className={porcentagem > 0 ? css.green : css.red}>
            <strong>R$ {capital}</strong>
          </p>

          <p className={porcentagem > 0 ? css.green : css.red}>
            <strong>
              {porcentagem > 0 ? '+' : '-'} R$ {acrescimo}
            </strong>
          </p>

          <p className={porcentagem > 0 ? css.blue : css.red}>
            <strong>{acrescimoPorcentual}%</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
