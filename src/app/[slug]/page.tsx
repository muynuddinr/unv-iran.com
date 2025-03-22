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
      
      {/* Added more top padding (pt-32 instead of default) to create space below navbar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
              {category.title}
            </h1>
            <div className="w-32 h-1 bg-white/80 mb-10 rounded-full shadow-lg"></div>
            <p className="text-xl max-w-3xl opacity-90 leading-relaxed">
              {category.description.substring(0, 180)}
              {category.description.length > 180 && '...'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content with enhanced styling */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8 border-t border-blue-100">
          <div className="prose max-w-none lg:prose-xl">
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 