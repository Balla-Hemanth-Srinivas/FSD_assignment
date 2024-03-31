import React from 'react';

const Team = ({ team }) => {
  return (
    <div className="team">
      <h2>Team Details</h2>
      <ul>
        {team.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
