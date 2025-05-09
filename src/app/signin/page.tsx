// File: src/app/signup/page.tsx

export const metadata = {
    title: "Sign In Page | Free Next.js Template for Startup and SaaS",
    description: "This is Sign In Page for Startup Nextjs Template",
    // other metadata
  };

import SignIn from "@/components/SignIn"; // your form component

export default function SigninPage() {
  return (
    <div className="p-8">
      <SignIn />
    </div>
  );
}
