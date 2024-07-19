import AnimateName from "./Name";
import "./animation.css";

export default function StartAnimation({
  isDisabled = false,
}: {
  isDisabled: boolean;
}) {
  if (isDisabled) return null;
  return (
    <div className="mainStart fixed inset-0 z-[999] h-[100dvh] min-h-[100dvh] w-full bg-navy px-2">
      <div className="upperPart relative flex h-[50dvh] w-full justify-center overflow-hidden">
        <AnimateName className="absolute -bottom-[101px] max-w-[80%]" />
      </div>
      <div className="lowerPart relative flex h-[50dvh] w-full justify-center overflow-hidden">
        <AnimateName className="absolute -top-[108px] max-w-[80%]" />
      </div>
    </div>
  );
}
