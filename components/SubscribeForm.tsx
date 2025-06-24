"use client";
import { FormEvent, useState } from "react";
import { Progress } from "@/components/ui/progress"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Mail, User } from "lucide-react"
export function EmbeddedForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const subscribeUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const response = await fetch("/api/subscribeUser", {
            body: JSON.stringify({
                email,
                firstName,
                lastName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const json = await response.json();
        const { data, error } = json;
        if (error) {
            setIsLoading(false);
            setMessage(error);
            return;
        }
        setMessage("You have successfully subscribed.");
        setIsLoading(false);
        return data;
    };

    if (message) {
        return <p className="text-red-700 text-base">{message}</p>;
    }

    if (isLoading) {
        return <Progress value={33} />;
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Join the VIP waitlist now.
                </CardTitle>
                <CardDescription>Get first access to workshop dates, exclusive early bird discounts, and bonus financial tips.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={subscribeUser} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 flex flex-col items-start">
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="firstName" name="firstName" placeholder="John" className="pl-10" />
                            </div>

                        </div>
                        <div className="space-y-2 flex flex-col items-start">
                            <Label htmlFor="lastName">Last Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input id="lastName" name="lastName" placeholder="Doe" className="pl-10" />
                            </div>

                        </div>
                    </div>

                    <div className="space-y-2 flex flex-col items-start ">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative w-full">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                className="pl-10 w-full"

                            />
                        </div>

                    </div>

                    <Button type="submit" className="w-full" >
                        "Join Waitlist"
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default EmbeddedForm;