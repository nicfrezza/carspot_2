// buttonVariants.js

export const buttonVariants = ({ variant, size, className }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none";

  const variants = {
    default: "bg-gray-200 text-black hover:bg-gray-300",
    destructive: "bg-red-500 text-white hover:bg-red-600", // Alterando a cor aqui
    outline: "border-2 border-gray-500 text-gray-500 hover:bg-gray-100",
    secondary: "bg-green-500 text-white hover:bg-green-600",  // Exemplo de nova cor
    ghost: "bg-transparent text-black hover:bg-gray-100",
    link: "text-blue-500 hover:underline",
  };

  const sizes = {
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
    icon: "text-xl",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;
};
