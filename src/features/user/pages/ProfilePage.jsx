import UserProfile from '../components/UserProfile';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-start py-20 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 transition-transform duration-300 hover:scale-[1.01]">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Manage your account, track your orders, and customize your Zaynarah
            experience
          </p>
        </div>

        {/* User Profile Card */}
        <div className="bg-linear-to-r from-gray-100 via-white to-gray-100 rounded-2xl p-8 shadow-inner border border-gray-200">
          <UserProfile />
        </div>
      </div>
    </main>
  );
}
