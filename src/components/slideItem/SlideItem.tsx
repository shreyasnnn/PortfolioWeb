
type SlideItemProps = {
  src: string;
  bgColor?: string;
  width?: string;
  height?: string;
};

export default function SlideItem({
  src,
  bgColor = "fill02",
  width = "45%",
  height = "100%",
}: SlideItemProps) {
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
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
