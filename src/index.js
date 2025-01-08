import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MarkdownPreviewer from './markdownPreviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>
);