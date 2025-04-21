'use client';

import client from '@/lib/apolloClient';
import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';

const QUERY = gql`
  query {
    countries(filter: { currency: { eq: "USD" } }) {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

export default function HomePage() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.query({ query: QUERY }).then((res) => {
      setCountries(res.data.countries);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading countries...</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          List of Countries Using USD
        </h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Country Name</th>
              <th className="p-3 border">Code</th>
              <th className="p-3 border">Official Language(s)</th>
              <th className="p-3 border">Continent</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((c) => (
              <tr key={c.code} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{c.name}</td>
                <td className="p-3 border">{c.code}</td>
                <td className="p-3 border">
                  {c.languages.map((l: any) => l.name).join(', ') || 'N/A'}
                </td>
                <td className="p-3 border">{c.continent.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
