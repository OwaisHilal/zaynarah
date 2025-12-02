// src/features/ui/home/Newsletter.jsx
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  return (
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
          <Button type="submit" variant="default" className="text-rose-600">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
