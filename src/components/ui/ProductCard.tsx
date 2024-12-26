interface ProductCardProps {
  title: string;
  image: string;
  description?: string;
}

export default function ProductCard({ title, image, description }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular Image Container */}
      <div className="relative w-48 h-48 mb-4 group">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>

      {/* Explore Button */}
      <div className="flex items-center text-red-600 hover:text-red-700 cursor-pointer">
        <span className="mr-2">Go</span>
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
}