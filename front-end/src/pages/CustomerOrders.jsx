import HeaderNavBar from '../components/Header-navbar';
import OrderCard from '../components/OrderCard';
// importar o componente navBar da Helô

function CustomerOrders() {
  const pedidosMocados = [
    { id: 1,
      pedido: 3,
      status: 'pendente',
      data: '02/01/2023',
      preco: 12.50,
    },
    { id: 2,
      pedido: 4,
      status: 'entregue',
      data: '10/01/2023',
      preco: 16.50,
    },
    { id: 3,
      pedido: 5,
      status: 'preparando',
      data: '12/01/2023',
      preco: 5.50,
    },
  ];

  // const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  return (
    <>
      <HeaderNavBar />

      { pedidosMocados.map((item) => (
        <>
          <OrderCard
            key={ item.id }
            item={ item }
          />
          <br />
        </>))}
    </>
  );
}

export default CustomerOrders;
