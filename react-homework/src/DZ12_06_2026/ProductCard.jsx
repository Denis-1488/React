import "./ProductCard.css";
import CartButton from "./CartButton";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="favorite">♡</div>

      <h3>{product.name}</h3>

      <div className="discount">
        -{product.discount}%
      </div>

      <div className="rating">
        {"⭐".repeat(product.rating)}
        <span> ({product.reviews})</span>
      </div>

      <div className="prices">
        <span className="old-price">
          {product.oldPrice} ₴
        </span>

        <span className="new-price">
          {product.price} ₴
        </span>
      </div>

      <CartButton />
    </div>
  );
}

export default ProductCard;