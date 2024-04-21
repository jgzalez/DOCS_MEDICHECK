import React from 'react';
// Asegúrate de importar `useNavigate` desde 'react-router-dom' si tu proyecto usa React Router v6.
import { useHistory } from 'react-router-dom';

function CustomButton({ url, children }) {
  let history = useHistory();

  function handleClick() {
    history.push(url);
  }

  return (
    <button onClick={handleClick} style={{
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: 'teal', // Color de fondo Teal
      color: 'white', // Texto en color blanco para contraste
      border: 'none',
      borderRadius: '5px', // Bordes redondeados para un look moderno
      // Agrega hover para mejorar la interactividad
      transition: 'background-color 0.3s',
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#008080'} // Oscurece el color al pasar el mouse
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'teal'} // Restaura el color original
    >
      {children}
    </button>
  );
}

export default CustomButton;
