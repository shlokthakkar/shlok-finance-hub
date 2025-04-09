
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  review: string;
  image?: string;
  rating: number;
  position?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, image, rating, position }) => {
  return (
    <Card className="h-full card-hover mx-4 min-w-[300px] sm:min-w-[350px] flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 italic">"{review}"</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
