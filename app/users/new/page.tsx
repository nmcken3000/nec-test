"use client";

import { COUNTRIES, INTERESTS } from "@/lib/mockUsers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  age: z
    .number({ error: "Please enter your age" })
    .min(18, "Must be 18 or older"),
  country: z.string().min(1, "Country is required"),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
});

type FormData = z.infer<typeof schema>;

export default function AddUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    // Without this, RHF defaults interests to `false` (unchecked) instead of []
    // causing Zod to complain it received a boolean instead of an array
    defaultValues: {
      interests: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          {/* Full name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="fullName"
              aria-required="true"
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Bukayo Saka"
            />
            {errors.fullName && (
              <p id="fullName-error" role="alert" className="text-red-500 text-xs">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <label htmlFor="age" className="text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              type="number"
              aria-required="true"
              aria-describedby={errors.age ? "age-error" : undefined}
              {...register("age", { valueAsNumber: true })}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Must be 18 or older"
            />
            {errors.age && (
              <p id="age-error" role="alert" className="text-red-500 text-xs">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              aria-required="true"
              aria-describedby={errors.country ? "country-error" : undefined}
              {...register("country")}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Please select a country</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p id="country-error" role="alert" className="text-red-500 text-xs">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Interests */}
          <fieldset>
            <legend className="text-sm font-medium text-gray-700 mb-2">
              Interests
            </legend>
            <div className="flex flex-col gap-2">
              {INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    value={interest}
                    {...register("interests")}
                    className="rounded border-gray-300"
                  />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests && (
              <p id="interests-error" role="alert" className="text-red-500 text-xs mt-1">
                {errors.interests.message}
              </p>
            )}
          </fieldset>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Add User
          </button>

        </form>
      </div>
    </main>
  );
}
