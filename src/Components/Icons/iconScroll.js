export const ScrollUp = ({
    className,
    width,
    height,
    color,
}) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        color={color}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.12 12.88L42.5 29.26a1 1 0 010 1.41l-2.83 2.83a1 1 0 01-1.41 0L24 19.24 9.74 33.5a1 1 0 01-1.41 0L5.5 30.67a1 1 0 010-1.41l16.38-16.38a3 3 0 014.24 0z"
        ></path>
    </svg>
);

export const ScrollDown = ({
    className,
    width,
    height,
    color,
}) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        color={color}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.88 33.12l-14.3-14.3a1 1 0 010-1.4l2.83-2.83a1 1 0 011.42 0L24 26.76l12.17-12.17a1 1 0 011.42 0l2.82 2.82a1 1 0 010 1.42l-14.29 14.3a3 3 0 01-4.24 0z"
        ></path>
    </svg>
);

export const ScrollTop = ({
    className,
    width = '1.6rem',
    height = '1.6rem',
}) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 48 48"
        fill="#FFF"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"
        ></path>
        <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path>
    </svg>
);
