<template>
    <header class="site-header">
      <nav>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style>
  .site-header {
    background-color: #1a202c;
    padding: 1rem 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }
  
  .nav-links li a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-links li a:hover, .nav-links li .router-link-active {
    color: #63b3ed;
  }
  </style>
  