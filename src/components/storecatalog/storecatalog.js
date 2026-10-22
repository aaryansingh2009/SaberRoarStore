import { useState } from "react";
import "./storecatalog.css";
import StoreHeader from "../storeheader/storeheader";
import StoreFooter from "../storefooter/storefooter";
import {
  storeApparel,
  storeCategories,
  storeSnacksDrinks,
  storeSupplies,
} from "../../storeData/store";

const products = [
  ...storeApparel.map((product) => ({ ...product, category: "Apparel" })),
  ...storeSnacksDrinks.map((product) => ({...product,category: "Snacks/Drinks",})),
  ...storeSupplies.map((product) => ({ ...product, category: "Supplies" })),
];

function StoreCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  let visibleProducts = products;

  if (selectedCategory !== "All Items") {
    visibleProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  let productList;
  if (visibleProducts.length > 0) {
    productList = (
      <div className="product-grid">
        {visibleProducts.map((product, index) => {
          let productImage;
          if (product.image && product.image !== "IMAGE_URL") {
            productImage = <img src={product.image} alt={product.item} />;
          } else {
            productImage = (
              <div className="product-image">Image coming soon</div>
            );
          }

          let productOptions = [];
          if (product.size) {
            productOptions.push(<p key="size">Sizes: {product.size}</p>);
          }
          if (product.colors) {
            productOptions.push(<p key="colors">Colors: {product.colors}</p>);
          }

          return (
            <div
              className="product-card"
              key={`${product.category}-${product.item}-${index}`}
            >
              {productImage}
              <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h3>{product.item}</h3>
                <p className="product-price">
                  ${Number(product.price).toFixed(2)}
                </p>
                {productOptions}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    productList = <p>There are no items in this category yet.</p>;
  }

  return (
    <>
      <StoreHeader />
      <title>Saber Roar Store - Products</title>
      <div className="store-catalog">
        <aside className="store-catalog__sidebar">
          <h1>BROWSE CATEGORIES</h1>
          <nav aria-label="Product categories">
            <ul className="store-catalog__category-list">
              {storeCategories.map((category) => {
                let buttonClass = "category";
                if (selectedCategory === category) {
                  buttonClass = "category selected";
                }

                return (
                  <li key={category}>
                    <button
                      className={buttonClass}
                      aria-pressed={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="store-catalog__products">
          <h2>{selectedCategory}</h2>
          {productList}
        </div>
      </div>
      <StoreFooter />
    </>
  );
}

export default StoreCatalog;
