import React from 'react';
import './cargoprice.css';

const CargoPrice = ({ cargo }: { cargo: string }) => {
  return (
    <div className="cargo-price">
      <span>{cargo}</span>
    </div>
  );
};

export default CargoPrice;
