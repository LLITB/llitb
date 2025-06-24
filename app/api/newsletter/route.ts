import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, firstName, lastName } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Debug: Check if environment variables are loaded
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_API_SERVER;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  console.log("Environment variables check:");
  console.log("API Key exists:", !!apiKey);
  console.log("Server exists:", !!server);
  console.log("Audience ID exists:", !!audienceId);
  console.log("Audience ID value:", audienceId); // Remove this line in production

  if (!apiKey || !server || !audienceId) {
    console.error("Missing required environment variables");
    return NextResponse.json(
      { error: "Server configuration error. Please contact support." },
      { status: 500 }
    );
  }

  mailchimp.setConfig({
    apiKey: apiKey,
    server: server,
  });

  try {
    const res = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      merge_fields: { FNAME: firstName, LNAME: lastName },
      status: "subscribed",
    });

    console.log("Mailchimp success:", res);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mailchimp error:", error);
    console.error("Error response:", error.response?.body);

    // Handle specific Mailchimp errors
    if (
      error.status === 400 &&
      error.response?.body?.title === "Member Exists"
    ) {
      return NextResponse.json(
        { error: "This email address is already subscribed." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
