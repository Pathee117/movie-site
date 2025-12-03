import { NextResponse } from "next/server";
import { searchMovies } from "@/lib/tmdb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";
  const results = await searchMovies(q);
  return NextResponse.json(results);
}