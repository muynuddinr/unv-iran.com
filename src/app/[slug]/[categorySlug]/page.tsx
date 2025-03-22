import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';
import Category from '@/models/Category';
import SubCategory from '@/models/SubCategory';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import { FiArrowLeft, FiBox, FiTag } from 'react-icons/fi';

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

async function getSubcategoriesByCategory(categoryId: string) {
  await connectDB();
  return SubCategory.find({ 
    category: categoryId,
    status: 'Active'
  });
}

export async function generateMetadata({ params }: { params: { slug: string, categorySlug: string } }) {
  const navbarCategory = await getNavbarCategoryBySlug(params.slug);
  
  if (!navbarCategory) {
    return { title: 'Category Not Found' };
  }
  
  const category = await getCategoryBySlug(params.categorySlug, navbarCategory._id);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }
  
  return {
    title: `${category.name} | ${navbarCategory.title} | Uniview`,
    description: category.description.substring(0, 160),
  };
}

export default async function CategoryDetailPage({ 
  params 
}: { 
  params: { slug: string, categorySlug: string } 
}) {
  const navbarCategory = await getNavbarCategoryBySlug(params.slug);
  
  if (!navbarCategory) {
    notFound();
  }
  
  const category = await getCategoryBySlug(params.categorySlug, navbarCategory._id);
  
  if (!category) {
    notFound();
  }
  
  // Fetch subcategories for this category
  const subcategories = await getSubcategoriesByCategory(category._id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white pt-40 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-blue-200 opacity-15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="text-sm font-medium text-blue-100 mb-2">
              <span>{navbarCategory.title}</span> / <span>{category.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
              {category.name}
            </h1>
            <div className="w-32 h-1.5 bg-white/80 mb-8 rounded-full shadow-lg"></div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <FiBox className="mr-2" />
                <span>{category.products} Products</span>
              </div>
              <div className="flex items-center">
                <FiTag className="mr-2" />
                <span>{category.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 -mt-16 max-w-6xl pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-t border-blue-50">
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link href={`/${navbarCategory.slug}`} className="hover:text-blue-600 transition-colors">
                {navbarCategory.title}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">{category.name}</span>
            </div>
          </div>

          {/* Product image and description section */}
          <div className="md:flex md:space-x-8 mb-12">
            <div className="md:w-1/3 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              {category.icon ? (
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="text-6xl text-gray-300 py-12">🖼️</div>
              )}
            </div>
            
            <div className="md:w-2/3">
              <div className="prose max-w-none lg:prose-xl mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <Link 
                  href={`/${navbarCategory.slug}`} 
                  className="flex items-center px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Back to {navbarCategory.title}
                </Link>
                
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
          
          {/* Subcategories section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Subcategories in this Category</h2>
            
            {subcategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subcategories.map((subcategory) => (
                  <Link 
                    key={subcategory._id}
                    href={`/${navbarCategory.slug}/${category.slug}/${subcategory.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                      {subcategory.image ? (
                        <img 
                          src={subcategory.image} 
                          alt={subcategory.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-6xl text-gray-300">🖼️</div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {subcategory.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {subcategory.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">
                          {subcategory.products} products
                        </span>
                        <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full group-hover:bg-blue-700 transition-colors">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No subcategories available in this category yet.</p>
                <Link 
                  href="/contact" 
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contact Us to Request Subcategories
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 

