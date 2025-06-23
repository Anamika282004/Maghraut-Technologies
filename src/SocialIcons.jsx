import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function SocialIcons() {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col items-center gap-4 z-50">
      <a
        href="mailto:your@email.com"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
      </a>

      <a
        href="tel:+919999999999" // Update with your real phone number
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faPhone} className="text-xl" />
      </a>
    </div>
  );
}