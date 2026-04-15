import { registerMockUser } from "@/lib/mock-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const result = registerMockUser(name, email, password);

    if (!result.success) {
      return new NextResponse(result.error || "Registration Failed", { status: 400 });
    }

    return NextResponse.json(result.user);
  } catch (error: any) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
