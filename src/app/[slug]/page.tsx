import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';
import Category from '@/models/Category';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// Change the interface to match Next.js 15 expectations
interface Params {
  slug: string;
}

export async function generateStaticParams() {
  await connectDB();
  const categories = await NavbarCategory.find({ status: 'Active' });
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

async function getCategoryBySlug(slug: string) {
  await connectDB();
  return NavbarCategory.findOne({ slug, status: 'Active' });
}

async function getCategoriesByNavbarCategory(navbarCategoryId: string) {
  await connectDB();
  return Category.find({ navbarCategory: navbarCategoryId, status: 'Active' });
}

export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  
  return {
    title: category.title,
    description: category.description.substring(0, 160),
  };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Params 
}) {
  const navbarCategory = await getCategoryBySlug(params.slug);
  
  if (!navbarCategory) {
    notFound();
  }
  
  const categories = await getCategoriesByNavbarCategory(navbarCategory._id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section with light blue gradient - increased top padding */}
      <div className="bg-gradient-to-r from-blue-400 to-sky-300 text-white pt-40 pb-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-sky-100 opacity-15 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight drop-shadow-md">
              Uniview <span className="text-white">{navbarCategory.title}</span> Products
            </h1>
            <div className="w-40 h-1.5 bg-white/80 mb-10 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl -mt-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-t border-blue-50">
          <div className="prose max-w-none lg:prose-xl mb-10">
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {navbarCategory.description}
            </p>
          </div>
          
          {/* Categories Grid */}
          {categories.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link 
                    key={category._id}
                    href={`/${navbarCategory.slug}/${category.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                      {category.icon ? (
                        <img 
                          src={category.icon} 
                          alt={category.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-6xl text-gray-300">🖼️</div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {category.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">
                          {category.products} products
                        </span>
                        <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 