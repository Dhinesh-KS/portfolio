import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "dhinesh.ks.work@gmail.com",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0c0c0c; color: #f5f0e8; border-radius: 12px;">
          <h2 style="color: #ff5e1a; margin-top: 0;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff5e1a;">${email}</a></p>
          <hr style="border-color: #222; margin: 24px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #ccc;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data." }, { status: 400 });
    }
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
