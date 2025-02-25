"use client"
export default function Loading() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>در حال بارگذاری...</h2>
            <div className="spinner"></div>
            <style jsx>{`
          .spinner {
            margin: 20px auto;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #0070f3;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        </div>
    );
}
