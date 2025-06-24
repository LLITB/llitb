import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { createHash } from "node:crypto";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { firstName, lastName, email } = body;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json({ error: "Audience required." }, { status: 400 });
  }
  try {
    // Check if the email exists:
    // const emailHash = createHash("md5").update(email).digest("hex");
    // const isEmailExisting = await mailchimp.lists
    //   .getListMember(audienceId, emailHash)
    //   .then((r) => {
    //     const isSubscribed = r?.status === "subscribed";
    //     return isSubscribed;
    //   })
    //   .catch(() => false);
    // if (isEmailExisting) {
    //   return NextResponse.json(
    //     { error: "Email already subscribed." },
    //     { status: 400 }
    //   );
    // }
    // If the email doesn't exist, subscribe:
    const data = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName ?? "",
        LNAME: lastName ?? "",
      },
    });
    return NextResponse.json({ data });
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
