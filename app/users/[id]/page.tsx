import { mockUsers } from "@/lib/mockUsers";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UserProfilePage({ params }: Props) {
  const { id } = await params;

  // use id to find the user
  const user = mockUsers.find((user) => user.id === id);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {user.fullName}
        </h1>
        <p className="text-gray-600">
          This page will display the user's profile details.
        </p>

        <div className="mt-6">
          <dl>
            <dt className="font-semibold">Full Name:</dt>
            <dd className="mb-4">{user.fullName}</dd>
            <dt className="font-semibold">Age:</dt>
            <dd className="mb-4">{user.age}</dd>
            <dt className="font-semibold">Country:</dt>
            <dd className="mb-4">{user.country}</dd>
            <dt className="font-semibold">Interests:</dt>
            <dd className="mb-4">{user.interests.join(", ")}</dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
