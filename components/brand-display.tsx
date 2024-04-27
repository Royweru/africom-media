import React from 'react';
import Image from 'next/image';

interface BrandDisplayProps {
    src: string[]|undefined;
}

export const BrandDisplay = ({
    src
}: BrandDisplayProps) => {
  

    return (
        <div className='w-full py-12 md:px-2 p-0 flex flex-wrap gap-4'>
            {src?.map((imgSrc) => (
                <div className='w-[250px] h-[300px] relative' key={imgSrc}>
                    <Image
                        src={imgSrc}
                        alt=''
                        className='bg-cover bg-center rounded-xl'
                        fill
                    />
                   
            
                </div>
            ))}
        </div>
    );
};
