import ProductCard from "./DZ12_06_2026/ProductCard";
import { products } from "./DZ12_06_2026/products";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;