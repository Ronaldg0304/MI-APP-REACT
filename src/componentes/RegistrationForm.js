import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    identification: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    profile: "Administrador",
  });

  return (
    <form>
      <div>
        <label htmlFor="identification">Identificación:</label>
        <input
          type="number"
          id="identification"
          name="identification"
          value={formData.identification}
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">Nombres:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Apellidos:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          required
        />
      </div>
      <div>
        <label htmlFor="profile">Perfil:</label>
        <select id="profile" name="profile" value={formData.profile} required>
          <option value="Administrador">Administrador</option>
          <option value="Jefe técnico">Jefe técnico</option>
          <option value="Gerente">Gerente</option>
          <option value="Supervisor técnico">Supervisor técnico</option>
          <option value="Técnico">Técnico</option>
        </select>
      </div>
      <button type="submit">Registrar usuario</button>
    </form>
  );
};

export default RegistrationForm;
