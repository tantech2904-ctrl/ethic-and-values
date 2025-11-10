import ChoiceButton from '../ChoiceButton';

export default function ChoiceButtonExample() {
  return (
    <div className="p-8 max-w-3xl space-y-4">
      <ChoiceButton
        text="Accept the gift graciously and thank Mr. Mehta for his warm welcome"
        value="A"
        onClick={() => console.log('Choice A selected')}
      />
      <ChoiceButton
        text="Politely refuse the gift and start reviewing the pending files professionally"
        value="B"
        onClick={() => console.log('Choice B selected')}
      />
    </div>
  );
}
