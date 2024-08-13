

function skillList({src, skill}) {

  return (
    
    <span>
      <div className="image">
        <img src={src} alt=" icon" />
      </div>
      
      
      <p>
        {skill}
      </p>
    </span>
  );
}

export default skillList;
