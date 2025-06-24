"use server";

import { SubscriberFormSchema, type FormState } from "@/lib/validations";

export async function subscribe(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // Validate form fields
  const validatedFields = SubscriberFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email } = validatedFields.data;

  try {
    // Call your Mailchimp API route
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      }/api/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        message: data.error || "Failed to subscribe. Please try again.",
        success: false,
      };
    }

    return {
      success: true,
      message: `Thank you ${firstName}! You've been successfully subscribed to our newsletter.`,
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}
