import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'Stackvibe helped us rethink our mobile UX strategy. We’ve seen consistent user growth month-over-month since partnering with them.',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartUpX',
      content: 'Their professionalism and delivery speed were exactly what we needed as a growing startup. Highly recommend Stackvibe!',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      company: 'Digital Solutions',
      content: 'They turned our rough wireframes into a functional, elegant interface. We especially appreciated their clear communication.',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 4
    },
    {
      id: 4,
      name: 'Ahmed El-Sayed',
      role: 'Business Development Lead',
      company: 'CairoTech',
      content: 'Working with Stackvibe was a smooth experience. They quickly understood our needs and delivered a highly intuitive UI.',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 5
    },
    {
      id: 5,
      name: 'Layla Mansour',
      role: 'Digital Marketing Consultant',
      company: 'BrightPath',
      content: 'Stackvibe really stood out with their responsive design and user-centric approach. Our engagement rates noticeably improved.',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 4
    },
    {
      id: 6,
      name: 'Youssef Kamal',
      role: 'Tech Lead',
      company: 'NextVision',
      content: 'We partnered with Stackvibe for a complete app overhaul. The result exceeded our expectations and was delivered right on time.',
      avatar: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-2409187029.jpg',
      rating: 5
    }
  ];
  

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;