import React, { useState, useEffect } from 'react';
import '../css/magicform.css'; // Import your CSS file for styling

const MagicForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200; // Adjust this value based on when you want the form to appear

      if (scrollPosition > scrollThreshold) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className={`form-container ${showForm ? 'show' : ''}`}>
      <button className="close-button" onClick={handleCloseForm}>
        X
      </button>
      <form>
        {/* Your form fields go here */}
      </form>
    </div>
  );
};

export default MagicForm;
