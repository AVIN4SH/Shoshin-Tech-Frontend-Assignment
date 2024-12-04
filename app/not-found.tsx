import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="space-y-4">
          <Button
            asChild
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Link href="/">Go back home</Link>
          </Button>
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact{" "}
            <a
              href="mailto:support@vasitum.com"
              className="text-blue-600 hover:underline"
            >
              support@vasitum.com
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <svg
          className="w-64 h-64 text-blue-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z" />
        </svg>
      </div>
    </div>
  );
}
