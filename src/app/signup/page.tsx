// File: src/app/signup/page.tsx

export const metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign Up Page for Startup Nextjs Template",
};

import SignUpForm from "@/components/SignUpForm"; // your form component

export default function SignUpPage() {
  return (
    <div className="p-8">
      <SignUpForm />
    </div>
  );
}
