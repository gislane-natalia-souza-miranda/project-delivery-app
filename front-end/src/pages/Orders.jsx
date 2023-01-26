import CustomerOrderCard from '../components/CustomerOrderCard';
// importar o componente navBar da Helô

function Orders() {
  // <Header NavBar>
  // para cada pedido(map) passa props contendo: pedido, status, data, preço
  const pedidosMocados = [
    { id: 189,
      pedido: 1,
      status: 'pendente',
      data: '02/01/2023',
      preco: 12.50,
    },
  ];
  return (
    pedidosMocados.map((pedido) => (<CustomerOrderCard
      key={ pedido.id }
      pedido={ pedido }
    />))

  );
}

export default Orders;
