import React, { useState } from 'react';

const FocusBlurExample = () => {
  // Estado para rastrear se o campo de input está focado ou não
  const [isFocused, setIsFocused] = useState(false);
  
  // Estado para armazenar o valor digitado no campo de input
  const [inputValue, setInputValue] = useState('');

  // Função chamada quando o campo de input recebe o foco
  const handleFocus = () => {
    setIsFocused(true);  // Define isFocused como true, indicando que o campo está focado
  };

  // Função chamada quando o campo de input perde o foco
  const handleBlur = () => {
    setIsFocused(false);  // Define isFocused como false, indicando que o campo não está mais focado
  };

  // Função chamada sempre que o valor do input muda
  const handleChange = (e) => {
    setInputValue(e.target.value);  // Atualiza o valor do input com o novo valor digitado
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React onFocus and onBlur Example</h2>

      {/* Input que responde aos eventos onFocus, onBlur e onChange */}
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}  // Quando o input recebe foco, chama handleFocus
        onBlur={handleBlur}    // Quando o input perde foco, chama handleBlur
        onChange={handleChange}  // Quando o valor do input muda, chama handleChange
        placeholder="Click or tab to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray', // Se focado, a borda é verde, caso contrário, é cinza
        }}
      />

      {/* Exibe mensagem baseada no estado isFocused */}
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>

      {/* Mostra o valor atual do input */}
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;
