
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="text-gray-500">There was a problem signing you in.</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
