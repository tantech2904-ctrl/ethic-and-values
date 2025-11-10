import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChoiceButtonProps {
  text: string;
  value: 'A' | 'B' | 'C' | 'D'; // Updated to handle 4 choices
  onClick: () => void;
  disabled?: boolean;
}

export default function ChoiceButton({ text, value, onClick, disabled }: ChoiceButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      className="w-full p-6 h-auto min-h-[80px] text-left justify-between items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-98 border-2 group whitespace-normal"
      data-testid={`button-choice-${value}`}
    >
      <span className="flex-1 text-base md:text-lg font-medium leading-relaxed pr-4 break-words">
        {text}
      </span>
      <ChevronRight className="w-5 h-5 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
