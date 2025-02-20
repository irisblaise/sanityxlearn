import { getAllExhibitions } from '@/lib/sanity';
import Image from 'next/image';
import { format } from 'date-fns';

export const revalidate = 3600; // Revalidate every hour

import Link from 'next/link';

export default async function ExhibitionsPage() {
  const { allExhibition } = await getAllExhibitions();

  return (
    <main className="min-h-screen bg-zinc-50 pt-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="font-serif italic text-6xl sm:text-7xl lg:text-8xl mb-2 tracking-tight text-zinc-900">Exhibitions</h1>
          <p className="text-lg text-zinc-500 mb-16 ml-1">Current and upcoming exhibitions</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allExhibition.map((exhibition) => (
              <Link 
                key={exhibition._id} 
                href={`/exhibitions/${exhibition.slug.current}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
                    {exhibition.title}
                  </h2>
                  
                  <div className="space-y-2 text-sm text-zinc-500">
                    <div>
                      {format(new Date(exhibition.startDate), 'MMM d, yyyy')} - 
                      {format(new Date(exhibition.endDate), 'MMM d, yyyy')}
                    </div>
                    <div>{exhibition.location}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
