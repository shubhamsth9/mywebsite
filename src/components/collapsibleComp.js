import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import LineBreak from './LineBreak';
import Description from './Description'

const CollapsibleComponent = ({title, company, duration, description}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <div 
        className="collapsible-comp"
      >
        <button
          className="collapsible-button"
          onClick={toggleOpen}
        >
          <h3 className='collapsible-title-heading'>{title}</h3>
          {isOpen ? (
            <ChevronUp color="#919191"/>
          ) : (
            <ChevronDown color="#919191"/>
          )}
        </button>
        {isOpen && (
          <div className="collapsible-description">
            <div className='collapsible-description-header'>
                <p>at {company}</p>
                <p>{duration}</p>
            </div>
            <LineBreak/>
            {description.map((desc, index) => {
                <Description descItem = {desc} />
            })}
          </div>
        )}
      </div>
  );
};

export default CollapsibleComponent;
