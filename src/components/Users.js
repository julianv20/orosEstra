import React, { useState } from 'react';

export const Users = () => {
  const [user, setuser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [state, setstate] = useState(false);

  const { name, email, password } = user;

  const handleChange = ({ target }) => {
    setuser({
      ...user,
      [target.name]: target.value,
    });
  };
  const userData = (e) => {
    e.preventDefault();
    setstate(true);
  };

  return (
    <div>
      <h1>Users</h1>
      <form className="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label for="email">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label for="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" onClick={userData}>
          Enviar
        </button>
      </form>
      {state ? (
        <p>
          {name} <br />
          {email} <br />
          {password} <br />
        </p>
      ) : null}
      {state ? <h2 className="danger">Informacion enviada</h2> : null}
    </div>
  );
};
