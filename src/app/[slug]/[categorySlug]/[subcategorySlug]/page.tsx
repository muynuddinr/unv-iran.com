import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';
import Category from '@/models/Category';
import SubCategory from '@/models/SubCategory';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import Link from 'next/link';
import { FiArrowLeft, FiBox, FiTag, FiInfo, FiCheck } from 'react-icons/fi';
import Product from '@/models/Product';
import { Metadata } from 'next';

async function getNavbarCategoryBySlug(slug: string) {
  await connectDB();
  return NavbarCategory.findOne({ slug, status: 'Active' });
}

async function getCategoryBySlug(slug: string, navbarCategoryId: string) {
  await connectDB();
  return Category.findOne({ 
    slug, 
    navbarCategory: navbarCategoryId, 
    status: 'Active' 
  });
}

async function getSubcategoryBySlug(slug: string, categoryId: string) {
  await connectDB();
  return SubCategory.findOne({ 
    slug, 
    category: categoryId,
    status: 'Active' 
  });
}

async function getProductsForSubcategory(subcategoryId: string) {
  await connectDB();
  return Product.find({ 
    subcategory: subcategoryId,
    status: 'Active' 
  });
}

// Change the interface to match Next.js 15 expectations
interface Params {
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const navbarCategory = await getNavbarCategoryBySlug(params.slug);
  
  if (!navbarCategory) {
    return { title: 'Subcategory Not Found' };
  }
  
  const category = await getCategoryBySlug(params.categorySlug, navbarCategory._id);
  
  if (!category) {
    return { title: 'Subcategory Not Found' };
  }
  
  const subcategory = await getSubcategoryBySlug(params.subcategorySlug, category._id);
  
  if (!subcategory) {
    return { title: 'Subcategory Not Found' };
  }
  
  return {
    title: `${subcategory.title} | ${category.name} | ${navbarCategory.title} | Uniview`,
    description: subcategory.description.substring(0, 160),
  };
}

export default async function SubcategoryDetailPage({ 
  params 
}: { 
  params: Params 
}) {
  const navbarCategory = await getNavbarCategoryBySlug(params.slug);
  
  if (!navbarCategory) {
    notFound();
  }
  
  const category = await getCategoryBySlug(params.categorySlug, navbarCategory._id);
  
  if (!category) {
    notFound();
  }
  
  const subcategory = await getSubcategoryBySlug(params.subcategorySlug, category._id);
  
  if (!subcategory) {
    notFound();
  }
  
  const products = await getProductsForSubcategory(subcategory._id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-40 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-indigo-200 opacity-15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="text-sm font-medium text-indigo-100 mb-2">
              <span>{navbarCategory.title}</span> / <span>{category.name}</span> / <span>{subcategory.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
              {subcategory.title}
            </h1>
            <div className="w-32 h-1.5 bg-white/80 mb-8 rounded-full shadow-lg"></div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <FiBox className="mr-2" />
                <span>{subcategory.products} Products</span>
              </div>
              <div className="flex items-center">
                <FiTag className="mr-2" />
                <span>{subcategory.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content with improved layout and components */}
      <main className="flex-grow container mx-auto px-4 -mt-16 max-w-6xl pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-8 border-t border-indigo-50">
          {/* Breadcrumb navigation moved further down with additional top margin */}
          <div className="pt-10 mt-10 mb-8 border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-gray-300">›</span>
              <Link href={`/${navbarCategory.slug}`} className="hover:text-indigo-600 transition-colors">
                {navbarCategory.title}
              </Link>
              <span className="mx-2 text-gray-300">›</span>
              <Link href={`/${navbarCategory.slug}/${category.slug}`} className="hover:text-indigo-600 transition-colors">
                {category.name}
              </Link>
              <span className="mx-2 text-gray-300">›</span>
              <span className="text-gray-900 font-medium">{subcategory.title}</span>
            </div>
          </div>

          {/* Product gallery and description section */}
          <div className="md:flex md:space-x-8 mb-16">
            <div className="md:w-2/5 mb-8 md:mb-0">
              {/* Main product image - fixed sizing and container */}
              <div className="w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                {subcategory.image ? (
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.title} 
                    className="w-full h-auto object-contain aspect-[4/3]"
                  />
                ) : (
                  <div className="text-6xl text-gray-300 py-24 w-full text-center">🖼️</div>
                )}
              </div>
            </div>
            
            <div className="md:w-3/5">
              <div className="prose max-w-none lg:prose-xl mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {subcategory.description}
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                  <FiInfo className="mr-2" />
                  Key Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Category:</strong> {category.name}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Section:</strong> {navbarCategory.title}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Available Products:</strong> {subcategory.products}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <Link 
                  href={`/${navbarCategory.slug}/${category.slug}`} 
                  className="flex items-center px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to {category.name}
                </Link>
                
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
          
          
          {/* Related products section - placeholder */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link 
                    key={product._id}
                    href={`/${navbarCategory.slug}/${category.slug}/${subcategory.slug}/${product.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                      {product.mainImage ? (
                        <img 
                          src={product.mainImage} 
                          alt={product.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-6xl text-gray-300">🖼️</div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {product.description.substring(0, 100)}...
                      </p>
                      <div className="flex justify-end items-center">
                        <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full group-hover:bg-blue-700 transition-colors">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-12 border border-dashed border-gray-300 rounded-xl text-center">
                <p className="text-gray-500">No products available in this subcategory yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 