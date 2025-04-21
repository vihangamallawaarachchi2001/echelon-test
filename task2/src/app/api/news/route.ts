import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.status !== 200) {
            return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
        }

        const data = await response.data;
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching news:", error);
        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
    }
}