# Swole Architecture Overview
```                                                    
  /$$$$$$                          /$$           /$$
 /$$__  $$                        | $$          | $$
| $$  \__/ /$$  /$$  /$$  /$$$$$$ | $$  /$$$$$$ | $$
|  $$$$$$ | $$ | $$ | $$ /$$__  $$| $$ /$$__  $$| $$
 \____  $$| $$ | $$ | $$| $$  \ $$| $$| $$$$$$$$|__/
 /$$  \ $$| $$ | $$ | $$| $$  | $$| $$| $$_____/    
|  $$$$$$/|  $$$$$/$$$$/|  $$$$$$/| $$|  $$$$$$$ /$$
 \______/  \_____/\___/  \______/ |__/ \_______/|__/


The application's architecture is organized into several key directories and files, each serving specific purposes and functionalities.

 Assets
- Contains assets such as images, icons, and other static resources used throughout the application.

 Components
- Houses reusable UI components and elements that are used across different screens and features.

 Constants
- Defines constants like spacing values, font sizes, colors, and other configurations used consistently across the application.

 Features
- Contains feature-specific code, logic, and UI components related to the application's main functionalities.

 Layout
- Contains components that use flexbox to structure elements. Currently, there are two components in this directory (Flexcontainer & ScrollContent).

 Lib
- Houses additional libraries, utilities, and helper functions used throughout the application, including React hooks.

 Navigation
- Manages navigation logic and routing between different screens and components within the application.

 Screens
- Contains the individual screens or views that users interact with, each representing a specific section or functionality of the application.

 Services
- Handles caching, storage operations, and local data management tasks

 index.js
- Acts as the entry point for the application, where initialization, configuration, and setup tasks are performed.

