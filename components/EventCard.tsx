import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
}

export function EventCard({
  image,
  title,
  description,
  date,
  location,
  attendees,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Calendar className="w-4 h-4 text-[#00A86B]" />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <MapPin className="w-4 h-4 text-[#00A86B]" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <Users className="w-4 h-4 text-[#00A86B]" />
            <span>{attendees.toLocaleString()} attendees</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-[#FF6B35] hover:bg-[#FF5520] hover:shadow-lg active:scale-95 transition-all duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}