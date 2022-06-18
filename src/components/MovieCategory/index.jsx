import React from 'react';
import './styles.scss';

const CATEGORY = [
  {
    id: 0,
    text: 'Motion trend pick',
  },
  {
    id: 1,
    text: 'Latest',
  },
  {
    id: 2,
    text: 'Recommended',
  },
];
const MovieCategory = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="category-movie">
      <div className="category-left">
        {CATEGORY.map((item, index) => (
          <p
            key={index}
            className="category-text"
            style={{
              fontWeight: tab === item.id ? '500' : '300',
              textDecoration: tab === item.id && 'underline',
              textDecorationThickness: tab === item.id && '2px',
            }}
            onClick={() => setTab(index)}
          >
            {item.text}
          </p>
        ))}
      </div>
      <div className="category-right">
        <p className="category-right-text">Selection criteria</p>
      </div>
    </div>
  );
};

export default MovieCategory;
