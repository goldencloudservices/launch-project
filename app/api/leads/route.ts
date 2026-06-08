import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1",
});

const docClient = DynamoDBDocumentClient.from(client);

export async function GET() {
  return Response.json({
    success: true,
    message: "Leads API is running.",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const name = body.name;
  const email = body.email;
  const interest = body.interest || "Get Updates";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim()) {
    return Response.json(
      {
        success: false,
        message: "Please enter your name.",
      },
      { status: 400 }
    );
  }

  if (!email || !emailRegex.test(email)) {
    return Response.json(
      {
        success: false,
        message: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  await docClient.send(
    new PutCommand({
      TableName: "launch-project-leads",
      Item: {
        email,
        name,
        interest,
        createdAt: new Date().toISOString(),
        source: "website",
      },
    })
  );

  return Response.json({
    success: true,
    message: "Lead saved successfully.",
  });
}