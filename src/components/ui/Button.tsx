interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-semibold transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}