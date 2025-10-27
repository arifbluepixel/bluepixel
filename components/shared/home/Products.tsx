"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProducts } from "@/lib/data/mockData";
import { svgPlaceholder } from "@/lib/helper/clientHelperfunc";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/shared/home/SectionHeader";
import Image from "next/image";

export default function Products() {
  const [activeTab, setActiveTab] = useState("featured");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filteredProducts = mockProducts.filter((p) => p.category === activeTab);

  // Reset when switching tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto-scroll functionality - only when not hovered
  useEffect(() => {
    if (isHovered) return; // Don't start timer if hovered

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= filteredProducts.length) {
          return 0;
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredProducts.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return filteredProducts.length - 1;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= filteredProducts.length - 1) return 0;
      return prev + 1;
    });
  };

  // Get 5 products in a circular manner
  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % filteredProducts.length;
      if (filteredProducts[index]) {
        products.push(filteredProducts[index]);
      }
    }
    return products;
  };

  const visibleProducts = getVisibleProducts();
  const featuredProduct = visibleProducts[0];
  const gridProducts = visibleProducts.slice(1, 5);

  const getGridClass = (index: number | string) => {
    if (index === 0) return "row-span-4";
    if (index === 1) return "row-span-3";
    if (index === 2) return "row-span-4";
    if (index === 3) return "row-span-3";
    return "";
  };

  const totalPages = filteredProducts.length;
  const currentPage = currentIndex;

  return (
    <section className="bg-gradient-to-b from-gray-200 to-gray-100 dark:from-slate-700 dark:to-slate-600 py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Signature Collections"
          badgeIcon={Package}
          title={`Our ${
            activeTab === "featured" ? "Featured" : "Hot"
          } Products`}
          highlightText={`Featured,Hot`}
          description="Discover our exclusive range of signature apparel crafted with precision, comfort, and timeless style. Each piece reflects our dedication to quality fabrics, modern tailoring, and trend-inspired designs perfect for those who value elegance and everyday confidence."
        />

        <Tabs
          value={activeTab}
          onValueChange={(val) => setActiveTab(val)}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              <TabsList className="flex flex-row h-auto w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-3xl shadow-lg gap-2">
                <TabsTrigger
                  value="featured"
                  className="w-full data-[state=active]:bg-teal-600 data-[state=active]:text-white rounded-xl px-6 py-4 font-semibold text-gray-800 dark:text-gray-100 transition-all duration-300 data-[state=active]:shadow-lg cursor-pointer"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger
                  value="hot"
                  className="w-full data-[state=active]:bg-cyan-600 data-[state=active]:text-white rounded-xl px-6 py-4 font-semibold text-gray-800 dark:text-gray-100 transition-all duration-300 data-[state=active]:shadow-lg cursor-pointer"
                >
                  Hot
                </TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="flex-1 h-12 bg-gray-400/30 dark:bg-slate-700/30 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 border-gray-800/20 dark:border-gray-200/20 hover:bg-gray-400/50 dark:hover:bg-slate-700/50 opacity-60 hover:opacity-100 cursor-pointer hover:border-gray-800/40 dark:hover:border-gray-200/40"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 h-12 bg-gray-400/30 dark:bg-slate-700/30 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 border-gray-800/20 dark:border-gray-200/20 hover:bg-gray-400/50 dark:hover:bg-slate-700/50 opacity-60 hover:opacity-100 cursor-pointer hover:border-gray-800/40 dark:hover:border-gray-200/40"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {Array.from({ length: Math.min(totalPages, 10) }).map(
                    (_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentPage % 10
                            ? "bg-teal-600 dark:bg-teal-400 w-10"
                            : "bg-gray-400 dark:bg-gray-600 w-2"
                        }`}
                      />
                    )
                  )}
                </div>
              )}

              {featuredProduct && (
                <TabsContent value={activeTab} className="mt-0">
                  <article
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-500 group border-4 border-gray-800 dark:border-gray-200 h-[545px] ${featuredProduct.bgColor} dark:bg-slate-800/70`}
                  >
                    <span
                      className={`absolute z-10 top-5 left-5 text-xs uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-lg border-2 border-gray-800 ${
                        featuredProduct.status === "featured"
                          ? "bg-teal-600 text-white"
                          : "bg-cyan-600 text-white"
                      }`}
                    >
                      ★ {featuredProduct.status}
                    </span>

                    <div className="absolute inset-0">
                      <Image
                        fill
                        src={
                          featuredProduct.image ||
                          svgPlaceholder(featuredProduct.title, "#ecfeff")
                        }
                        alt={featuredProduct.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                      <div className="mb-2">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                          {new Date().toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">
                        {featuredProduct.title}
                      </h3>
                      <p className="text-sm text-white/90 line-clamp-2 leading-relaxed">
                        {featuredProduct?.description ||
                          "Discover the edit curated pieces for a considered wardrobe that speaks to timeless style."}
                      </p>
                    </div>
                  </article>
                </TabsContent>
              )}
            </div>

            <TabsContent
              value={activeTab}
              className="lg:col-span-7 xl:col-span-8 mt-0"
            >
              {gridProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[95px]">
                  {gridProducts.map((product, index) => (
                    <article
                      key={`${product.id}-${index}`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={`rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 group border-4 border-gray-800 dark:border-gray-200 ${
                        product?.bgColor
                      } dark:bg-slate-800/70 ${getGridClass(index)}`}
                    >
                      <span
                        className={`absolute z-10 top-4 right-4 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-bold shadow-lg border-2 border-gray-800 ${
                          product.status === "featured"
                            ? "bg-teal-600 text-white"
                            : "bg-cyan-600 text-white"
                        }`}
                      >
                        {product.status}
                      </span>

                      <div className="absolute inset-0">
                        <Image
                          fill
                          src={
                            product.image ||
                            svgPlaceholder(product.title, "#ecfeff")
                          }
                          alt={product.title}
                          className={`w-full h-full object-fill group-hover:scale-110 transition-transform duration-700 ${product?.bgColor}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 drop-shadow-lg">
                          {product.title}
                        </h3>
                        <p className="text-sm text-white/90 line-clamp-2">
                          {product?.description ||
                            "Discover the edit curated pieces for a considered wardrobe that speaks to timeless style."}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-[400px] bg-white/50 dark:bg-slate-800/50 rounded-3xl border-4 border-gray-800 dark:border-gray-200">
                  <p className="text-gray-600 dark:text-gray-400">
                    No more products to display
                  </p>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
