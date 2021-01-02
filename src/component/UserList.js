function User({ user, onRemove, onToggle }) {
    return (
      <div style={{border: '1px solid gray', margin: '20px auto', width: '300px'}}>
        <p>username: 
            <b
                style={{
                cursor: 'pointer',
                color: user.isActive ? 'green' : 'black'
                }}
            >
                {user.username}
            </b>
        </p>
        
        <p>ailas: <span>{user.ailas}</span></p>
        <button onClick={() => onToggle(user.id)}>수정</button>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }
  
  function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
        );
  }

export default UserList;