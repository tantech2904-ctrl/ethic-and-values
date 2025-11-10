import TypewriterText from '../TypewriterText';

export default function TypewriterTextExample() {
  return (
    <div className="p-8 max-w-3xl">
      <TypewriterText 
        text="The morning sun streams through the dusty windows of your new office in the small town of Chandrapur. As Arjun Sharma, you've just been posted as the Assistant Development Officer."
        speed={20}
      />
    </div>
  );
}
