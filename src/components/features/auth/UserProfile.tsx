
import { auth } from "@/lib/auth"
import { LogoutButton } from "./LogoutButton"
import Image from "next/image"

export async function UserProfile() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div className="flex items-center gap-4">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{session.user.name}</span>
        <span className="text-xs text-gray-500">{session.user.email}</span>
      </div>
      <LogoutButton />
    </div>
  )
}
