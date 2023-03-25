export const ScrollUp = ({
    className,
    width = '2.0rem',
    height = '2.0rem',
}) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
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
    width = '2.0rem',
    height = '2.0rem',
}) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.88 33.12l-14.3-14.3a1 1 0 010-1.4l2.83-2.83a1 1 0 011.42 0L24 26.76l12.17-12.17a1 1 0 011.42 0l2.82 2.82a1 1 0 010 1.42l-14.29 14.3a3 3 0 01-4.24 0z"
        ></path>
    </svg>
);
