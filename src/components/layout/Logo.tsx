import { Mail } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="bg-primary-500 p-2 rounded-md mr-2">
        <Mail size={24} className="text-dark-900" />
      </div>
      <span className="font-display font-bold text-xl">
        <span className="text-white">023</span>
        <span className="text-primary-500">Agency</span>
      </span>
    </div>
  );
};

export default Logo;