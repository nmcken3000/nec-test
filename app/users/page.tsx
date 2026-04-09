"use client";
import { mockUsers } from "@/lib/mockUsers";
import Link from "next/link";

/* DEMO PURPOSES ONLY -
If I was to fetch real data, I would do it like this:
export default async function UsersListingPage() {                                                                                                                                                                      
    const res = await fetch('https://api.example.com/users')                                                                                                                                                       
    const users = await res.json()                                                                                                                                                                                 
                                                                                                                                                                                                                   
    return (                                                                                                                                                                                                     
      <ul>
        {users.map((user) => (                                                                                                                                                                                     
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.fullName}</Link>
          </li>
        ))}                                                                                                                                                                                                        
      </ul>                                                                                                                                                                                                      
    )
  }
*/

export default function UsersListingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Users Listing</h1>
        <p className="text-gray-600">This page will display a list of users.</p>

        <table className="w-full mt-6 table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Full Name</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Country</th>
              <th className="py-2 px-4 text-left">Interests</th>
              <th className="py-2 px-4 text-left">View Details</th>
            </tr>
          </thead>
          {mockUsers.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">
                <Link href={`/users/${user.id}`}>{user.fullName}</Link>
              </td>
              <td className="py-2 px-4">{user.age}</td>
              <td className="py-2 px-4">{user.country}</td>
              <td className="py-2 px-4">{user.interests.join(", ")}</td>
              <td className="py-2 px-4">
                <Link
                  className="btn inline-block bg-blue-600 text-white rounded-md mt-6 py-2 px-4 text-sm font-medium hover:bg-blue-700"
                  href={`/users/${user.id}`}
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </table>
        <Link
          href="/users/new"
          className="inline-block bg-blue-600 text-white rounded-md mt-6 py-2 px-4 text-sm font-medium hover:bg-blue-700"
        >
          Add New User
        </Link>
      </div>
    </main>
  );
}
