function CartButton({ onClick }) {
  return (
    <button
      className="cart-btn"
      onClick={onClick}
    >
      🛒
    </button>
  );
}

export default CartButton;