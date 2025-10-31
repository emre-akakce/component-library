import React from 'react';
import Badge from './Badge/Badge';
import Price from './Price/Price';
import CargoPrice from './CargoPrice/CargoPrice';
import DropRatio from './DropRatio/DropRatio';
import Header from './Header/Header';
import Card from './Card/Card';
import AlarmCount from './AlarmCount/AlarmCount';
import Image from './Image/Image';
import './hpl.css';

const products = [
  { id: 1, title: 'Product 1', price: '100.00 TL', ratio: '%10', cargo: 'Kargo Bedava', badge: 'Yeni Ürün', alarmCount: 5, imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/0008-mlpf3tu-a_large.jpg' },
  { id: 2, title: 'Product 2', price: '200.00 TL', ratio: '%20', cargo: 'Kargo Bedava', badge: 'İndirim', alarmCount: 10, imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/0008-mlpf3tu-a_large.jpg' },
  { id: 3, title: 'Product 3', price: '300.00 TL', ratio: '%30', cargo: 'Ücretli Kargo', badge: 'Son 3 Ürün', alarmCount: 0, imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/0008-mlpf3tu-a_large.jpg' },
];

function Hpl() {
  return (
    <div className="hpl-container">
      {products.map(product => (
        <Card key={product.id}>
          <Image src={product.imageUrl} alt={product.title} />
          <Header title={product.title} />
          <DropRatio ratio={product.ratio} />
          <CargoPrice cargo={product.cargo} />
          <Badge text={product.badge} />
          <Price price={product.price} />
          <AlarmCount count={product.alarmCount} />
        </Card>
      ))}
    </div>
  );
}

export default Hpl;