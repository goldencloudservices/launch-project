export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return Response.json(
      {
        success: false,
        message: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  console.log("New lead:", email);

  return Response.json({
    success: true,
    message: "Lead received",
  });
}