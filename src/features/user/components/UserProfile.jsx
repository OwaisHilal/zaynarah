// src/features/user/components/UserProfile.jsx
import { useState } from 'react';
import { useUserStore } from '../hooks/useUser';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserProfile() {
  const { user, loading, error, fetchProfile, logout } = useUserStore();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  if (!user)
    return <p className="text-center text-gray-500">No user logged in.</p>;

  const handleProfileUpdate = async () => {
    setUpdateLoading(true);
    setUpdateError(null);
    setSuccessMsg('');

    try {
      // Dummy API call simulation
      await new Promise((res) => setTimeout(res, 500));

      // Update the store
      fetchProfile(); // fetch latest user info
      setSuccessMsg('Profile updated successfully!');
    } catch (err) {
      setUpdateError(err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // preview
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Profile Picture */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            {profilePic ? (
              <AvatarImage src={profilePic} />
            ) : (
              <AvatarFallback>{name[0]}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="mt-2"
            />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <Label>Change Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="New password"
          />
        </div>

        {/* Update Button */}
        {updateError && <p className="text-red-600">{updateError}</p>}
        {successMsg && <p className="text-green-600">{successMsg}</p>}
        <Button
          onClick={handleProfileUpdate}
          disabled={updateLoading}
          className="mt-2"
        >
          {updateLoading ? 'Updating...' : 'Update Profile'}
        </Button>

        {/* Admin section */}
        {user.role === 'admin' && (
          <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-semibold text-gray-900 mb-2">Admin Panel</h3>
            <Button variant="outline">Go to Admin Dashboard</Button>
          </div>
        )}

        {/* Logout */}
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
