import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';
import Category from '@/models/Category';
import SubCategory from '@/models/SubCategory';
import Product from '@/models/Product';
import Navbar from '../../../../Components/Navbar';
import Footer from '../../../../Components/Footer';
import Link from 'next/link';
import { FiArrowLeft, FiBox, FiTag, FiInfo, FiCheck } from 'react-icons/fi';

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

async function getProductBySlug(slug: string, subcategoryId: string) {
  await connectDB();
  return Product.findOne({ 
    slug, 
    subcategory: subcategoryId,
    status: 'Active' 
  });
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: { slug: string, categorySlug: string, subcategorySlug: string, productSlug: string } 
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
  
  const product = await getProductBySlug(params.productSlug, subcategory._id);
  if (!product) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section with dark blue gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white pt-40 pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-indigo-200 opacity-15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="text-sm font-medium text-indigo-100 mb-2">
              <span>{navbarCategory.title}</span> / <span>{category.name}</span> / <span>{subcategory.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-md">
              {product.title}
            </h1>
            <div className="w-32 h-1.5 bg-white/80 mb-8 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-grow pb-16 -mt-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-t border-indigo-50">
            {/* Breadcrumb navigation */}
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap">
                <Link href="/" className="hover:text-indigo-600 transition-colors">
                  Home
                </Link>
                <span className="mx-2">›</span>
                <Link href={`/${navbarCategory.slug}`} className="hover:text-indigo-600 transition-colors">
                  {navbarCategory.title}
                </Link>
                <span className="mx-2">›</span>
                <Link href={`/${navbarCategory.slug}/${category.slug}`} className="hover:text-indigo-600 transition-colors">
                  {category.name}
                </Link>
                <span className="mx-2">›</span>
                <Link href={`/${navbarCategory.slug}/${category.slug}/${subcategory.slug}`} className="hover:text-indigo-600 transition-colors">
                  {subcategory.title}
                </Link>
                <span className="mx-2">›</span>
                <span className="text-gray-900 font-medium">{product.title}</span>
              </div>
            </div>

            {/* Product gallery & details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product images */}
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                  <img 
                    src={product.mainImage} 
                    alt={product.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {product.additionalImages && product.additionalImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {product.additionalImages.map((image: string, index: number) => (
                      image && (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden h-24 flex items-center justify-center">
                          <img 
                            src={image} 
                            alt={`${product.title} - Image ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
              
              {/* Product details */}
              <div>
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                </div>
                
                <div className="prose prose-indigo mb-8">
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="border-t pt-6 mt-8">
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href={`/${navbarCategory.slug}/${category.slug}/${subcategory.slug}`} 
                      className="flex items-center px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FiArrowLeft className="mr-2" />
                      Back to {subcategory.title}
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
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 