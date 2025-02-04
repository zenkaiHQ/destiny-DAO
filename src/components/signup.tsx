import { Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import Link from "next/link"

export const SignUpComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-black ">
            <Card className="w-1/4">
                <CardHeader >
                    <CardTitle className="font-black text-center text-2xl">Sign Up</CardTitle>

                    <Button className="bg-white border border-gray-200 hover:bg-slate-50 text-black ">
                        <Github color="black" />
                        Continue with Github
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with email
                            </span>
                        </div>
                    </div>
                    <form
                        className="space-y-4"

                    >
                        <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            required
                            autoComplete="email"
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                            autoComplete="new-password"
                        />
                        <Button className="w-full" type="submit">
                            Sign Up
                        </Button>
                    </form>
                    <div className="text-center">
                        <Button asChild variant="link">
                            <Link href="/sign-in">Already have an account? Sign in</Link>
                        </Button>
                    </div>
                </CardHeader>

            </Card>
        </div >
    )
}