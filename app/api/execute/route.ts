import { NextResponse } from "next/server";
import axios from "axios";
import { config } from "@/config/env";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lang, code, input } = body;

    const response = await axios.post(
      config.rapidApi.url,
      {
        langEnum: [
          "php",
          "python",
          "c",
          "c_cpp",
          "csharp",
          "kotlin",
          "golang",
          "r",
          "java",
          "typescript",
          "nodejs",
          "ruby",
          "perl",
          "swift",
          "fortran",
          "bash",
        ],
        lang: lang.toLowerCase(),
        code,
        input,
      },
      {
        headers: {
          "x-compile": "rapidapi",
          "X-RapidAPI-Key": config.rapidApi.key,
          "X-RapidAPI-Host": config.rapidApi.host,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
