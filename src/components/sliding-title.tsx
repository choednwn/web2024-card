import { cn } from "@/lib/utils";

type SlidingTitleProps = {
  text: string;
  delay?: number;
  className?: string;
};

export const SlidingTitle = ({ delay, ...props }: SlidingTitleProps) => {
  const letter_first: string = props.text[0];
  const letter_rest: string = props.text.slice(1);

  return (
    <div
      className={cn(
        "flex flex-row font-serif text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
        props.className,
      )}
    >
      <div className="">{letter_first}</div>
      <div className="size-fit overflow-hidden">
        <div
          className="size-fit duration-700 ease-out animate-in slide-in-from-left fill-mode-both"
          style={{
            animationDelay: `${delay}ms`,
          }}
        >
          {letter_rest}
        </div>
      </div>
    </div>
  );
};
