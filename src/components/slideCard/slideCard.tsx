
type SlideCardProps = {
  src: string;
  bgColor?: string;
  width?: string;
  height?: string;
};

export default function SlideCard({
  src,
  bgColor = "fill02",
  width = "45%",
  height = "100%",
}: SlideCardProps) {
  return (
    
        <div
      className="flex flex-col items-center justify-start rounded-3xl shadow-card overflow-hidden shrink-0 p-8"
      style={{
        backgroundColor: bgColor,
        width,
        height,
      }}
    >
      <img
        src={src}
        loading="lazy"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
