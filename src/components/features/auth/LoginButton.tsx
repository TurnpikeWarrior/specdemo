
import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/Button"
import { Github } from "lucide-react"

export function LoginButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button className="flex items-center gap-2">
        <Github className="w-4 h-4" />
        Sign in with GitHub
      </Button>
    </form>
  )
}
