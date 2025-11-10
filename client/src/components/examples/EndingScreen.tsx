import EndingScreen from '../EndingScreen';
import { endings } from '@/lib/storyData';

export default function EndingScreenExample() {
  return (
    <EndingScreen 
      ending={endings[2]}
      choices={['B', 'B', 'B', 'B']}
      onRestart={() => console.log('Restart clicked')}
    />
  );
}
