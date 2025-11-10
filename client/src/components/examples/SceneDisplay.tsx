import SceneDisplay from '../SceneDisplay';
import { scenes } from '@/lib/storyData';

export default function SceneDisplayExample() {
  return (
    <SceneDisplay 
      scene={scenes[0]} 
      onChoice={(choice) => console.log('Choice selected:', choice)}
    />
  );
}
