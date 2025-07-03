"use client"

import { useActionState, useEffect } from "react"
import { subscribe } from "@/actions/subscribe"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Mail, User } from "lucide-react"

export default function SubscriberForm() {
    const [state, action, pending] = useActionState(subscribe, undefined)

    // Show toast notifications based on form state
    useEffect(() => {
        if (state?.success) {
            toast.success(state.message)
        } else if (state?.message && !state?.success) {
            toast.error(state.message)
        }
    }, [state])

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Subscribe to Newsletter
                </CardTitle>
                <CardDescription>Stay updated with our latest news and updates</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={action} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="firstName" name="firstName" placeholder="John" className="pl-10" disabled={pending} />
                            </div>
                            {state?.errors?.firstName && <p className="text-sm text-destructive">{state.errors.firstName[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="lastName" name="lastName" placeholder="Doe" className="pl-10" disabled={pending} />
                            </div>
                            {state?.errors?.lastName && <p className="text-sm text-destructive">{state.errors.lastName[0]}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                className="pl-10"
                                disabled={pending}
                            />
                        </div>
                        {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-[#f1bb32] text-black" disabled={pending}>
                        {pending ? "Subscribing..." : "Join Waitlist"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
