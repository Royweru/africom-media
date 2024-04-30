"use client"
import React from 'react';

interface ServiceGalleryProps {
  imgs?: string[];
}

export const ServiceGallery = ({ imgs }: ServiceGalleryProps) => {
  return (
    <div className='w-full md:px-4 py-3 grid md:grid-cols-3 gap-3'>
      {imgs &&
        imgs.map((img, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded'
            style={{
              paddingTop: `${Math.random() * 100}%`, // Random height
            }}
          >
            <img
              src={img}
              alt={`Image ${index}`}
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
        ))}
    </div>
  );
};
