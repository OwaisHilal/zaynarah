import { useCartStore } from '../hooks/useCart';
export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCartStore((state) => ({
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) updateQuantity(item.id, value);
  };
  return (
    <div className="flex items-center justify-between border-b py-4">
      {' '}
      {/* Product Info */}{' '}
      <div className="flex items-center gap-4">
        {' '}
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />{' '}
        <div>
          {' '}
          <h3 className="text-lg font-semibold">{item.title}</h3>{' '}
          <p className="text-gray-600">₹{item.price}</p>{' '}
        </div>{' '}
      </div>{' '}
      {/* Quantity & Remove */}{' '}
      <div className="flex items-center gap-4">
        {' '}
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded"
        />{' '}
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          {' '}
          Remove{' '}
        </button>{' '}
      </div>{' '}
    </div>
  );
}
