import React, { createContext, useContext, useState } from "react";

// Create the DateContext
const DateContext = createContext();

// Create a provider component
export const DateProvider = ({ children }) => {};

// Custom hook to use the DateContext
export const useDateContext = () => useContext(DateContext);
