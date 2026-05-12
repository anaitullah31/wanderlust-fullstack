import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  const { name, location, image, feedback } = testimonial;

  return (
    <div className="border border-gray-200 p-6 flex gap-8 items-start">
      <div className="flex-1">
        <p className="text-lg leading-6 font-medium text-black">
          &quot;{feedback}&quot;
        </p>

        <div className="mt-12 border-t border-cyan-500 pt-2 w-fit">
          <h4 className="text-sm text-cyan-600">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      <div className="relative w-44 h-52 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
