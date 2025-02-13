export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif italic text-6xl sm:text-7xl lg:text-8xl mb-2 tracking-tight text-zinc-900">Contact</h1>
          <p className="text-xl text-zinc-600 mb-16 ml-1">Get in touch with us</p>
          
          <div className="space-y-12">
            <p className="text-lg text-zinc-700 leading-relaxed">
              For inquiries about artworks, exhibitions, or any other questions,
              please don&apos;t hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400">Email</h2>
                  <a 
                    href="mailto:contact@gallery.com" 
                    className="block text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    contact@gallery.com
                  </a>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400">Phone</h2>
                  <a 
                    href="tel:+31612345678" 
                    className="block text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    +31 6 1234 5678
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400">Address</h2>
                <div className="text-lg text-zinc-900 leading-relaxed">
                  Gallery Street 123<br />
                  1234 AB Amsterdam<br />
                  The Netherlands
                </div>
              </div>
            </div>

            {/* Opening Hours or Additional Info can be added here */}
          </div>
        </div>
      </div>
    </main>
  );
}
