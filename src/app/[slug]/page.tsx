import { notFound } from 'next/navigation';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section with light blue gradient - increased top padding */}
      <div className="bg-gradient-to-r from-blue-400 to-sky-300 text-white pt-40 pb-24 relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-sky-100 opacity-15 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight drop-shadow-md">
              Uniview <span className="text-white">{category.title}</span> Products
            </h1>
            <div className="w-40 h-1.5 bg-white/80 mb-10 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Main content with enhanced styling */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl -mt-14 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-t border-blue-50">
          <div className="prose max-w-none lg:prose-xl">
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
        
        {/* Optional decorative element at bottom */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-200 to-sky-200 rounded-full opacity-50 mt-8 mb-4 mx-auto max-w-2xl"></div>
      </main>
      
      <Footer />
    </div>
  );
} 