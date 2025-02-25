"use client"; // این فایل باید در کلاینت اجرا شود

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("خطای رخ‌داده:", error);
    }, [error]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>مشکلی پیش آمده! 🚨</h2>
            <p>{error.message}</p>
            <button
                onClick={reset}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                }}

            >
                تلاش مجدد
            </button>
        </div>
    );
}
