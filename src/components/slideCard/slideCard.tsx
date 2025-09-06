type SlideCardProps = {
  src: string;
  bgColor?: string;
  width?: string;
  height?: string;
  alt?: string; // optional alt prop for accessibility
};

export default function SlideCard({
  src,
  bgColor = "fill02",
  width = "45%",
  height = "100%",
  alt = "Slide image", // default alt text
}: SlideCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-start rounded-3xl shadow-card overflow-hidden shrink-0 p-8"
      style={{
        backgroundColor: bgColor,
        width,
        height,
      }}
      role="group"
      aria-label="Slide card"
    >
      <img
        src={src}
        loading="lazy"
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
