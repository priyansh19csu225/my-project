'use client'

import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

interface YoutubeEmbedProps {
  videoLink: string;
}

const opts= {
  playerVars: {
      autoplay: 0 ,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1
    }
};
const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoLink }) => {



  return (
    <div
   
      className='youtube-embed-container'
    >
      <YouTube  videoId={videoLink} opts={opts} />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  videoLink: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
