interface ImageShadowProps {
    className?: string;
}

const ImageShadow = ({ className }: ImageShadowProps) => <div className={`absolute inset-0 w-full h-full shadow-inner z-1 ${className}`} />;

export default ImageShadow;
