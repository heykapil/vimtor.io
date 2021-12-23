interface ImageShadowProps {
    className?: string;
}

function ImageShadow({ className }: ImageShadowProps) {
    return <div className={`absolute inset-0 w-full h-full shadow-inner z-1 ${className}`} />;
}

export default ImageShadow;
