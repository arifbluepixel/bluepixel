"use client";
import { categories, demoProducts } from "@/lib/data/mockData";
import { Product, ProductCardProps } from "@/lib/types";
import {
  ChevronDown,
  Grid,
  LayoutGrid,
  List,
  Package,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  if (viewMode === "list") {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-4 flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
        <div className="relative w-full md:w-64 h-80 flex-shrink-0">
          {product.badge && (
            <span
              className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 text-xs font-medium z-10 rounded shadow-sm`}
            >
              {product.badge}
            </span>
          )}
          <Image
            fill
            src={product.images[currentImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {product.saleFooter && (
            <div className="absolute bottom-0 left-0 right-0 bg-black dark:bg-gray-900 text-white py-1 px-2 text-xs flex items-center justify-around">
              {product.saleFooter.map((text: string, i: number) => (
                <React.Fragment key={i}>
                  <span>{text}</span>

                  {
                    // @ts-expect-error - wrong ts
                    i < product?.saleFooter.length - 1 && (
                      <span className="text-yellow-400">🔥</span>
                    )
                  }
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {product.name}
            </h3>

            {product?.colors && product.colors.length > 1 && (
              <div className="flex gap-2 mb-4">
                {product.colors.map((color: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === index
                        ? "border-gray-800 dark:border-gray-200 scale-110"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="mb-4 space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Contents:
                </span>{" "}
                {product.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Details:
                </span>{" "}
                Warm up or cool down with this essential 3/4 sleeve t shirts.
                Featured in a loose fit and pleated sleeve design with sew
                stunning front for a lived-in look.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div
        className="relative overflow-hidden cursor-pointer h-72 md:h-80"
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 text-xs font-medium z-10 rounded shadow-sm`}
          >
            {product.badge}
          </span>
        )}
        <Image
          fill
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {product.saleFooter && (
          <div className="absolute bottom-0 left-0 right-0 bg-black dark:bg-gray-900 text-white py-1 px-2 text-xs flex items-center justify-around">
            {product.saleFooter.map((text: string, i: number) => (
              <React.Fragment key={i}>
                <span>{text}</span>
                {
                  // @ts-expect-error - wrong ts
                  i < product?.saleFooter.length - 1 && (
                    <span className="text-yellow-400">🔥</span>
                  )
                }
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {product?.colors && product.colors.length > 1 && (
          <div className="flex gap-2">
            {product.colors.map((color: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  selectedColor === index
                    ? "border-gray-800 dark:border-gray-200 scale-110"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProductsList() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryView, setShowCategoryView] = useState<boolean>(true); // NEW: Control view mode
  const [viewMode, setViewMode] = useState<string>("grid-3");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(demoProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const term = searchParams.get("search");
    if (term) {
      setSearchTerm(term);
    }
  }, [searchParams]);

  const getCategoryCount = (categoryName: string): number => {
    return demoProducts.filter((p) => p.category === categoryName).length;
  };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage, filteredProducts]);

  useEffect(() => {
    setIsLoading(true);
    setCurrentPage(1);

    const timer = setTimeout(() => {
      let filtered = demoProducts;
      if (selectedCategory) {
        filtered = filtered.filter((p) => p.category === selectedCategory);
      }
      if (searchTerm) {
        const lower = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(lower) ||
            p.category.toLowerCase().includes(lower)
        );
      }
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategorySelect = (categoryName: string): void => {
    setSelectedCategory(categoryName);
    setShowCategoryView(false); // NEW: Switch to product view
    setIsSidebarOpen(false);
  };

  const handleBackToCategories = (): void => {
    setShowCategoryView(true);
    setSelectedCategory(null);
    setSearchTerm("");
  };

  const gridClass =
    viewMode === "grid-2"
      ? "grid-cols-1 sm:grid-cols-2"
      : viewMode === "grid-3"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "";

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto p-4 md:px-6 md:py-16">
        <div className="flex gap-6">
          {/* Sidebar - Desktop (Only show in product view) */}
          {!showCategoryView && (
            <aside className="hidden lg:block w-64 flex-shrink-0 ">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm sticky top-24 z-20  overflow-y-auto">
                <div className="flex items-center justify-between mb-4 cursor-pointer">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    Category
                  </h3>
                  <ChevronDown
                    size={18}
                    className="text-gray-600 dark:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name)}
                      className={`flex justify-between items-center py-2 px-3 rounded cursor-pointer transition-all ${
                        selectedCategory === cat.name
                          ? "bg-gray-100 dark:bg-gray-700 shadow-sm"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {cat.name}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500 text-sm font-semibold">
                        {getCategoryCount(cat.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="mt-6 bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-600 dark:to-teal-800 rounded-lg overflow-hidden relative h-64 shadow-md z-10">
                <Image
                  fill
                  src={slider1}
                  alt="Fall winter collection"
                  className="w-full h-full object-cover opacity-80"
                />
              </div> */}
            </aside>
          )}

          {/* Sidebar - Mobile Overlay */}
          {isSidebarOpen && !showCategoryView && (
            <>
              <div
                className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                onClick={() => setIsSidebarOpen(false)}
              />
              <aside className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-2xl max-h-[85vh] overflow-y-auto animate-slideDown">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-5 pb-4 border-b dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Package
                        size={20}
                        className="text-gray-700 dark:text-gray-300"
                      />
                    </div>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                      aria-label="Close filters"
                    >
                      <X
                        size={22}
                        className="text-gray-600 dark:text-gray-400"
                      />
                    </button>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm uppercase tracking-wide">
                      Category
                    </h4>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <div
                          key={cat.name}
                          onClick={() => handleCategorySelect(cat.name)}
                          className={`flex justify-between items-center py-3 px-4 rounded-lg cursor-pointer transition-all ${
                            selectedCategory === cat.name
                              ? "bg-gray-900 dark:bg-gray-700 text-white shadow-md"
                              : "bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              selectedCategory === cat.name
                                ? "text-white"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {cat.name}
                          </span>
                          <span
                            className={`font-semibold text-sm ${
                              selectedCategory === cat.name
                                ? "text-gray-200"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {getCategoryCount(cat.name)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedCategory && (
                    <button
                      onClick={handleBackToCategories}
                      className="w-full mt-4 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </aside>
            </>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Show Category Grid or Product List */}
            {showCategoryView ? (
              <>
                {/* Category View Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 mb-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Browse by Category
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Select a category to view products
                  </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {categories.map((category, index) => (
                    <div
                      key={category.name}
                      onClick={() => handleCategorySelect(category.name)}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fadeIn"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          fill
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {getCategoryCount(category.name)} Products
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Toolbar */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {/* Back to Categories Button */}
                    <button
                      onClick={handleBackToCategories}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm"
                      aria-label="Back to categories"
                    >
                      <span>←</span>
                    </button>

                    {/* Mobile Filter Button */}
                    <button
                      onClick={() => setIsSidebarOpen(true)}
                      className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-sm"
                      aria-label="Open filters"
                    >
                      <SlidersHorizontal size={22} />
                    </button>

                    {selectedCategory && (
                      <span className="hidden sm:flex bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                        {selectedCategory}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Search by name or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 text-sm pr-10"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                          aria-label="Clear search"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                    <div className="flex gap-1 border dark:border-gray-700 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("grid-2")}
                        className={`p-2 rounded transition-colors ${
                          viewMode === "grid-2"
                            ? "bg-gray-100 dark:bg-gray-700"
                            : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        }`}
                        aria-label="Two column grid"
                      >
                        <Grid
                          size={18}
                          className="text-gray-700 dark:text-gray-300"
                        />
                      </button>
                      <button
                        onClick={() => setViewMode("grid-3")}
                        className={`p-2 rounded transition-colors ${
                          viewMode === "grid-3"
                            ? "bg-gray-100 dark:bg-gray-700"
                            : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        }`}
                        aria-label="Three column grid"
                      >
                        <LayoutGrid
                          size={18}
                          className="text-gray-700 dark:text-gray-300"
                        />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded transition-colors ${
                          viewMode === "list"
                            ? "bg-gray-100 dark:bg-gray-700"
                            : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        }`}
                        aria-label="List view"
                      >
                        <List
                          size={18}
                          className="text-gray-700 dark:text-gray-300"
                        />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm flex-1 sm:flex-initial">
                      <span className="text-gray-600 dark:text-gray-400 hidden sm:inline whitespace-nowrap">
                        Sort by:
                      </span>
                      <select className="border dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 w-full sm:w-auto text-sm">
                        <option>Trending</option>
                        <option>Newest</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Products Grid/List */}
                <div className="relative min-h-[600px]">
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 rounded-lg">
                      <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100 mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          Loading products...
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`transition-opacity duration-300 ${
                        isLoading ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {viewMode === "list" ? (
                        <div>
                          {displayedProducts.map((product, index) => (
                            <div
                              key={product.id}
                              className="animate-fadeIn"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <ProductCard
                                product={product}
                                viewMode={viewMode}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`grid ${gridClass} gap-4 md:gap-6`}>
                          {displayedProducts.map((product, index) => (
                            <div
                              key={product.id}
                              className="animate-fadeIn"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <ProductCard
                                product={product}
                                viewMode={viewMode}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {displayedProducts.length === 0 && !isLoading && (
                        <div className="text-center py-20">
                          <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No products found in this category.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {!isLoading && totalPages > 1 && (
                  <nav
                    className="flex justify-center items-center gap-2 mt-8"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded transition-colors ${
                        currentPage === 1
                          ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                      aria-label="Previous page"
                    >
                      ←
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded transition-all ${
                            currentPage === page
                              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 scale-110 shadow-md"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                          aria-label={`Page ${page}`}
                          aria-current={
                            currentPage === page ? "page" : undefined
                          }
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded transition-colors ${
                        currentPage === totalPages
                          ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                      aria-label="Next page"
                    >
                      →
                    </button>
                  </nav>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
