export default function ZaiIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 30 30" className={className}>
            <rect x="1.49" y="1.49" width="27.02" height="27.02" rx="4" fill="#2D2D2D" stroke="#FFFFFF" strokeWidth="0.63" />
            <path
                fill="#FFFFFF"
                d="M15.47,7.1l-1.3,1.85c-0.2,0.29-0.54,0.47-0.9,0.47h-7.1V7.09H15.47z"
            />
            <polygon
                fill="#FFFFFF"
                points="24.3,7.1 13.14,22.91 5.7,22.91 16.86,7.1"
            />
            <path
                fill="#FFFFFF"
                d="M14.53,22.91l1.31-1.86c0.2-0.29,0.54-0.47,0.9-0.47h7.09v2.33H14.53z"
            />
        </svg>
    );
}
