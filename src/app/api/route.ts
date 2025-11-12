export function GET(request: Request) {
  console.log(request);

  return new Response("Hello from the API route!");
}
