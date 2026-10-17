import "./storecatalog.css";

const categories = ["Food", "Drinks", "Apparel", "Supplies"];

const CatalogSidebar = ({ selectedCategories, setSelectedCategories }) => {
    const handleChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };
    const resetFilters = () => {
        setSelectedCategories(categories);
    };

    return (
        <aside className="catalog-sidebar">
            <div className="sidebar-heading">
                <h2>Filter Products</h2>
                <p>Find what you're looking for</p>
            </div>

            <div className="sidebar-filter-group">
                <h3>Categories</h3>

                {categories.map((category) => (
                    <label className="sidebar-category" key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleChange(category)}
                        />
                        <span>{category}</span>
                    </label>
                ))}
            </div>

            <button
                type="button"
                className="sidebar-reset"
                onClick={resetFilters}
            >
                Reset Filters
            </button>
        </aside>
    );
};

export default CatalogSidebar;
