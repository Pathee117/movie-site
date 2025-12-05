import { NextRequest, NextResponse } from "next/server";
import { getMovie } from "@/lib/tmdb";

// Next.js 16 route handlers: params is a Promise
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const movie = await getMovie(id);
  return NextResponse.json(movie);
}