import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import NavbarCategory from '@/models/NavbarCategory';

// GET all navbar categories
export async function GET() {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();
    console.log("Connected to MongoDB successfully");
    const categories = await NavbarCategory.find({}).sort({ createdAt: -1 });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Error fetching navbar categories:', error);
    return NextResponse.json({ error: 'Failed to fetch navbar categories' }, { status: 500 });
  }
}

// POST new navbar category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();
    
    const newCategory = await NavbarCategory.create({
      title: body.title,
      description: body.description,
      status: body.status || 'Active',
    });
    
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating navbar category:', error);
    return NextResponse.json({ error: 'Failed to create navbar category' }, { status: 500 });
  }
} 