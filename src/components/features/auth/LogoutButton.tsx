
import { signOut } from "@/lib/auth"
import { Button } from "@/components/ui/Button"

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button variant="secondary">Sign Out</Button>
    </form>
  )
}
