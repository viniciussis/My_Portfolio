import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { register } from "swiper/element/bundle"
import './index.css';
import 'swiper/css';
import 'swiper/css/bundle'

register()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);