import { promoBanner } from '../assets';

export default function PromoBanner() {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={promoBanner}
        alt="Promotion"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
