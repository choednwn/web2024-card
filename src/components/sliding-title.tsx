import { cn } from "@/lib/utils";

type SlidingTitleProps = {
  text: string;
  delay?: number;
  className?: string;
};

export const SlidingTitle = (props: SlidingTitleProps) => {
  const letter_first: string = props.text[0];
  const letter_rest: string = props.text.slice(1);

  return (
    <div
      className={cn(
        "flex select-none flex-row gap-1 font-serif text-5xl font-bold transition-all duration-700 hover:text-[calc(3rem+12px)] sm:text-6xl sm:hover:text-[calc(3.75rem+12px)] md:text-7xl md:hover:text-[calc(4.5rem+12px)] lg:text-8xl lg:hover:text-[calc(6rem+12px)] xl:text-9xl xl:hover:text-[calc(8rem+12px)]",
        props.className,
      )}
    >
      <div className="">{letter_first}</div>
      <div className="size-fit overflow-hidden">
        <div
          className="size-fit duration-700 ease-out animate-in slide-in-from-left fill-mode-both"
          style={{
            animationDelay: `${props.delay}ms`,
          }}
        >
          {letter_rest}
        </div>
      </div>
    </div>
  );
};
