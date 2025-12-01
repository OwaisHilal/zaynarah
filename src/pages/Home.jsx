import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1544717301-9cdcb1f594b4?auto=format&fit=crop&w=1500&q=80"
          alt="Pashmina Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Discover The Luxury of{' '}
            <span className="text-rose-300">Pashmina</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Handwoven in Kashmir. Crafted with love. Designed for those who
            appreciate timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-rose-600 px-10 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-white py-6 shadow-sm border-b">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-gray-700 text-sm font-medium">
          <span className="flex items-center gap-2">
            🚚 Free Shipping Over ₹1999
          </span>
          <span className="flex items-center gap-2">
            🧵 100% Authentic Kashmiri Pashmina
          </span>
          <span className="flex items-center gap-2">💳 COD Available</span>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Pashmina Shawls',
              img: 'https://images.unsplash.com/photo-1607735241669-c0c6e293e1f9',
            },
            {
              title: 'Winter Stoles',
              img: 'https://images.unsplash.com/photo-1585158536310-9e636cca06c3',
            },
            {
              title: 'Luxury Weave Collection',
              img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
            },
          ].map((col, idx) => (
            <Link key={idx} to="/shop" className="group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">
                    {col.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">The Zaynarah Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            For generations, skilled Kashmiri artisans have handcrafted
            exquisite Pashmina pieces — each thread woven with precision, love,
            and centuries of tradition. At Zaynarah, we honor this heritage by
            bringing authentic luxury to the modern world.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Aisha K.',
              text: 'Absolutely love my shawl! The texture is divine.',
            },
            {
              name: 'Rohit S.',
              text: 'The craftsmanship is impeccable. Worth every rupee.',
            },
            {
              name: 'Meera P.',
              text: 'Elegant, warm, and beautifully made. Highly recommend!',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <p className="text-gray-700 mb-4">“{t.text}”</p>
              <p className="text-gray-900 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-rose-600 py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter for exclusive offers and stories from
            Kashmir.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-auto flex-1"
            />
            <button className="bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* LOGO / MEDIA SHOWCASE */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-6">
          Featured In
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            'https://via.placeholder.com/120x40?text=Vogue',
            'https://via.placeholder.com/120x40?text=Elle',
            "https://via.placeholder.com/120x40?text=Harper's",
          ].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Media Logo"
              className="h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
