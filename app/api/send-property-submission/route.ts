import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let payload: Record<string, string> = {};

  if (contentType.includes("application/json")) {
    payload = (await request.json()) as Record<string, string>;
  } else {
    const formData = await request.formData();
    payload = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
    );
  }

  return NextResponse.json({
    success: true,
    message: "Submission received.",
    submission: payload,
  });
}
