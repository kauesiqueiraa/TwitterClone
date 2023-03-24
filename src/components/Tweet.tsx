import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';
import homem1 from '../assets/homem1.jpg';

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {

  return (
    <Link to="/status" className="tweet">
      <img src={homem1} alt="Cris Ruper" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Cris Ruper</strong>
          <span>@crisruper</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>

      </div>
    </Link>
  )
}