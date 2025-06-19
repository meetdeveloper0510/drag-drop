import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const navigate = useNavigate(); // For navigation

  const boxes = [
    { id: 1, name: 'Box 1' },
    { id: 2, name: 'Box 2' },
    { id: 3, name: 'Box 3' }
  ];

  const handleDragStart = (e, boxId) => {
    setDraggedItem(boxId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setIsDragOver(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    if (draggedItem) {
      switch (draggedItem) {
        case 1:
          navigate('/box1');
          break;
        case 2:
          navigate('/box2');
          break;
        case 3:
          navigate('/box3');
          break;
        default:
          break;
      }
    }

    setDraggedItem(null);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="main-title">
          Drag the boxes into the drop zone
        </h1>

        {/* Draggable Boxes */}
        <div className="boxes-container">
          {boxes.map((box) => (
            <div
              key={box.id}
              draggable
              onDragStart={(e) => handleDragStart(e, box.id)}
              onDragEnd={handleDragEnd}
              className={`draggable-box ${draggedItem === box.id ? 'dragging' : ''}`}
            >
              {box.name}
            </div>
          ))}
        </div>

        {/* Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
        >
          <div className="drop-zone-empty">
            <div className="drop-icon">📦</div>
            <p className="drop-text">Drop here to go to the page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
