import { EventCard } from './EventCard';

const events = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBjcm93ZCUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NDIyMTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Summer Music Festival 2026',
    description: 'Experience the biggest music festival of the year with top artists from around the world.',
    date: 'June 15-17, 2026',
    location: 'Central Park, New York',
    attendees: 15000,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1773828746476-7ca780cdcb82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHNlbWluYXJ8ZW58MXx8fHwxNzc0MTgxNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Tech Innovation Summit',
    description: 'Join industry leaders and innovators for cutting-edge discussions on the future of technology.',
    date: 'April 22-24, 2026',
    location: 'San Francisco, CA',
    attendees: 3500,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1695655300485-d3da8bc72076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbiUyMHJ1bm5pbmclMjBzcG9ydHN8ZW58MXx8fHwxNzc0Mjc5NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'City Marathon Challenge',
    description: 'Push your limits in this annual marathon event supporting local charities and community health.',
    date: 'May 10, 2026',
    location: 'Downtown Chicago',
    attendees: 8000,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1675674683873-1232862e3c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBtYXJrZXR8ZW58MXx8fHwxNzc0MjM3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Global Food & Wine Festival',
    description: 'Savor culinary delights from around the world prepared by renowned chefs and sommeliers.',
    date: 'August 5-7, 2026',
    location: 'Miami Beach, FL',
    attendees: 12000,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzQxOTE0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Contemporary Art Exhibition',
    description: 'Explore stunning works from emerging and established contemporary artists in this exclusive showcase.',
    date: 'March 30 - April 15, 2026',
    location: 'Los Angeles, CA',
    attendees: 2500,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NzQxOTE0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Business Networking Gala',
    description: 'Connect with professionals and entrepreneurs while enjoying an evening of inspiration and opportunity.',
    date: 'April 12, 2026',
    location: 'Boston, MA',
    attendees: 1200,
  },
];

export function FeaturedEvents() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#00A86B' }}>
            Featured Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover upcoming events that match your interests and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
