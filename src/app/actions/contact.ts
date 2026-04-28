"use server";

// ─────────────────────────────────────────────────────────────────────────────
// Config — set CONTACT_EMAIL and RESEND_API_KEY in your .env.local
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "YOUR_EMAIL_HERE";
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const FROM_ADDRESS   = process.env.RESEND_FROM   ?? "PD Labs <onboarding@resend.dev>";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactFormData {
  fullName:    string;
  email:       string;
  company:     string;
  projectType: string;
  budget:      string;
  timeline:    string;
  message:     string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function sanitize(value: string, maxLength = 2000): string {
  return value.replace(/[<>]/g, "").trim().slice(0, maxLength);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// ─────────────────────────────────────────────────────────────────────────────
// Server Action
// ─────────────────────────────────────────────────────────────────────────────

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResult> {
  const { fullName, email, company, projectType, budget, timeline, message } = data;

  // — Front-line validation ——————————————————————————————————————————————————
  if (!sanitize(fullName) || !sanitize(email) || !sanitize(message)) {
    return { success: false, message: "Please fill in all required fields." };
  }
  if (!isValidEmail(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }
  if (!RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return {
      success: false,
      message: "Email service is not configured. Please contact us directly.",
    };
  }

  const clean = {
    fullName:    sanitize(fullName, 200),
    email:       sanitize(email, 200),
    company:     sanitize(company, 200) || "—",
    projectType: sanitize(projectType, 100),
    budget:      sanitize(budget, 100),
    timeline:    sanitize(timeline ?? "", 100),
    message:     sanitize(message, 5000),
  };

  // — Plain-text email body ——————————————————————————————————————————————————
  const textBody = [
    "New project enquiry — PD Labs",
    "",
    `Name:         ${clean.fullName}`,
    `Email:        ${clean.email}`,
    `Company:      ${clean.company}`,
    `Project Type: ${clean.projectType}`,
    `Budget:       ${clean.budget}`,
    "",
    "Message:",
    clean.message,
    "",
    "—",
    "Sent via pdlabs.vercel.app/contact",
  ].join("\n");

  // — HTML email body ————————————————————————————————————————————————————————
  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#0d0a0e;padding:32px 40px;">
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;letter-spacing:-0.02em;">PD Labs</p>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.45);font-size:13px;">New project enquiry</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <h2 style="margin:0 0 24px;font-size:22px;font-weight:600;color:#0d0a0e;">
              ${clean.fullName} wants to work with you
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;width:130px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0d0a0e;font-size:14px;font-weight:500;">${clean.fullName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;vertical-align:top;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${clean.email}" style="color:#e63946;text-decoration:none;">${clean.email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;vertical-align:top;">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0d0a0e;font-size:14px;">${clean.company}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;vertical-align:top;">Project</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0d0a0e;font-size:14px;">${clean.projectType}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Budget</td>
                <td style="padding:10px 0;color:#0d0a0e;font-size:14px;">${clean.budget}</td>
              </tr>
            </table>
            <p style="margin:0 0 8px;color:#888;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
            <p style="margin:0;color:#0d0a0e;font-size:14px;line-height:1.7;white-space:pre-wrap;">${clean.message}</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:20px 40px;border-top:1px solid #eee;">
            <p style="margin:0;color:#bbb;font-size:12px;">Sent from pdlabs.vercel.app/contact</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // — Send via Resend REST API ————————————————————————————————————————————————
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        Authorization:  `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:     FROM_ADDRESS,
        to:       [CONTACT_EMAIL],
        reply_to: clean.email,
        subject:  `New enquiry: ${clean.projectType} — ${clean.fullName}`,
        text:     textBody,
        html:     htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({})) as { statusCode?: number; message?: string; name?: string };
      console.error("[contact] Resend API error:", JSON.stringify(err));

      if (res.status === 401 || res.status === 403) {
        return { success: false, message: "Email service misconfigured. Please contact us directly at hello@pdlabs.io" };
      }
      if (res.status === 422) {
        return { success: false, message: `Delivery error: ${err.message ?? "invalid address"}. Please contact us directly.` };
      }
      if (res.status === 429) {
        return { success: false, message: "Too many requests. Please wait a moment and try again." };
      }
      return {
        success: false,
        message: `Failed to send (${res.status}). Please try again or email us directly.`,
      };
    }

    return {
      success: true,
      message: "Message sent. We'll be in touch within 24 hours.",
    };
  } catch (err) {
    console.error("[contact] Fetch error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
