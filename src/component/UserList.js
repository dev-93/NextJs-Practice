function User({ user, onRemove }) {
    return (
      <div style={{border: '1px solid gray', margin: '20px auto', width: '300px'}}>
        <p>username: <b>{user.username}</b></p>
        <p>ailas: <span>{user.ailas}</span></p>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }
  
  function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                    onRemove={onRemove}
                />
            ))}
        </div>
        );
  }

export default UserList;