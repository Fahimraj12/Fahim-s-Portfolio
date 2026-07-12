import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = "bg-purple-500", animation = "animate-blob-slow" }) => {
  const { top, left } = position;
  const { width, height } = size;
  return (
    <div 
      className={`absolute pointer-events-none z-0 ${animation}`}
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className={`w-full h-full rounded-full opacity-15 blur-[100px] ${color}`} />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
  animation: PropTypes.string,
};

export default BlurBlob;