import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, firstName, lastName } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_API_SERVER;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

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
    // First, let's check what merge fields are available for debugging
    const mergeFields = await mailchimp.lists.getListMergeFields(audienceId);
    // console.log(
    //   "Available merge fields:",
    //   mergeFields.merge_fields.map((field) => ({
    //     tag: field.tag,
    //     name: field.name,
    //     required: field.required,
    //     type: field.type,
    //   }))
    // );

    // Add member with only the basic merge fields
    const res = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        // Only include ADDRESS if you want to collect it, otherwise leave empty
        ADDRESS: "waitlist form", // This might be required by your audience settings
      },
      status: "subscribed",
    });

    console.log("Mailchimp success:", res);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mailchimp error:", error);
    console.error("Error response:", error.response?.body);

    // Handle specific Mailchimp errors
    if (error.status === 400) {
      const errorBody = error.response?.body;
      if (errorBody?.title === "Member Exists") {
        return NextResponse.json(
          { error: "This email address is already subscribed." },
          { status: 400 }
        );
      } else if (errorBody?.title === "Invalid Resource") {
        console.error(
          "Invalid merge fields. Check your Mailchimp audience settings."
        );
        return NextResponse.json(
          {
            error:
              "There was an issue with the subscription form. Please contact support.",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
