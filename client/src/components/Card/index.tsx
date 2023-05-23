import React from "react";

type CardProps = {
  symbol: string;
  percent: number;
  name?: string;
  price?: number;
  new_price?: number;
}

const Card = ({ symbol, percent, name, price, new_price }: CardProps) => {

  const percentFixed = percent.toFixed(2)
  const conditionalClass = percent > 0 ? 'positive' : 'negative'

  return (
    <div data-symbol={symbol} className={conditionalClass + ' card'} data-tooltip={name}>
      <div className="card-title">
        {symbol}
      </div>
      <div className="card-body">
        <div className="card-body__price">
          <div className="price">
            <span className="price__hover">{price?.toFixed(2)}</span>
            <span className="price__hover_lost">{new_price?.toFixed(2)}</span>
          </div>
          <div className={conditionalClass + ' change-percent' } data-color={conditionalClass}>
            {percentFixed}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;