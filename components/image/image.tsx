import NextImage, { ImageProps } from 'next/image';
import React from 'react';

export default function Image(props: ImageProps) {
  const { src, alt, width, height, className, ...rest } = props;
  
  // Handle missing dimensions
  if (!width || !height) {
    return (
      <div className={`relative ${className}`} style={{ width: '100%', height: 'auto' }}>
        <NextImage
          src={src}
          alt={alt || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          {...rest}
        />
      </div>
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
}