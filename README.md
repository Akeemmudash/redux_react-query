# Global State Management with Redux Toolkit and TanStack Query

This repository contains a tutorial project that demonstrates how to implement professional and optimized global state management in a **Vite + React (JavaScript)** application using **Redux Toolkit** for UI state and **TanStack Query** for server state. The tutorial focuses on practical examples, best practices, and performance optimizations, particularly to avoid unnecessary re-renders when syncing server and UI state.

## Aims of the Tutorial
- **Learn Redux Toolkit**: Understand how to use `createSlice`, `createAsyncThunk`, and `configureStore` to manage UI state (e.g., filters, modals) in a scalable way.
- **Master TanStack Query**: Implement data fetching, caching, mutations, and pagination using `useQuery`, `useMutation`, and `useInfiniteQuery`.
- **Integrate Both Tools**: Combine Redux Toolkit and TanStack Query effectively, using Redux for UI state and TanStack Query for server state.
- **Optimize Performance**: Apply techniques like memoization, selective state updates, and proper caching to minimize re-renders and improve app performance.
- **Structure a Large-Scale Project**: Follow a feature-based folder structure for maintainability and scalability.
- **Practical Application**: Build a user management feature with filtering, updating, and pagination to apply the concepts in a real-world scenario.

## Prerequisites
- Basic knowledge of **React** and **JavaScript**.
- Familiarity with **Redux** or **TanStack Query** is helpful but not required.
- **Node.js** (v16 or higher) and **npm** installed.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/akeemmudash/redux_react-query.git
cd redux_react-query
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the app.

## Project Structure
```
my-app/
├── src/
│   ├── api/                    # TanStack Query API calls
│   │   ├── queries.js          # Query functions (e.g., fetchUsers)
│   │   ├── mutations.js        # Mutation functions (e.g., updateUser)
│   ├── components/             # React components
│   │   ├── UserList.jsx
│   │   ├── UserFilter.jsx
│   ├── features/               # Redux slices
│   │   ├── users/
│   │   │   ├── usersSlice.js
│   │   ├── filters/
│   │   │   ├── filtersSlice.js
│   ├── store/
│   │   ├── store.js            # Redux store configuration
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── README.md
├── package.json
```

- **api/**: Contains TanStack Query logic for fetching and mutating data.
- **features/**: Organizes Redux slices by feature (e.g., users, filters).
- **components/**: Houses React components for the UI.
- **store/**: Configures the Redux store.

## Key Features
- **User List**: Fetches users from an API using TanStack Query’s `useQuery`.
- **Filtering**: Stores filter state (e.g., search term) in Redux Toolkit.
- **Mutations**: Updates user data with TanStack Query’s `useMutation`.
- **Optimizations**: Implements memoization, selective state updates, and caching to prevent unnecessary re-renders.
- **Scalable Structure**: Uses a feature-based folder structure for large-scale applications.

## Technologies Used
- **Vite**: Fast build tool for React.
- **React**: UI library for building components.
- **Redux Toolkit**: Simplified Redux for global UI state management.
- **TanStack Query**: Server state management for data fetching and caching.
- **JSONPlaceholder API**: Mock API for demo purposes.

## How to Use
1. **Explore the Code**: Check `src/api/` for TanStack Query logic and `src/features/` for Redux slices.
2. **Run the App**: Use `npm run dev` to see the user list and filter functionality.
3. **Extend the Tutorial**: Add features like pagination (`useInfiniteQuery`) or optimistic updates with `useMutation`.
4. **Optimize**: Follow the included best practices (e.g., memoization, normalized state) for your own projects.

## Best Practices
- **Separation of Concerns**: Use TanStack Query for server state and Redux Toolkit for UI state.
- **Performance**: Leverage `React.memo`, `useMemo`, and TanStack Query’s `staleTime` to minimize re-renders.
- **Scalability**: Organize code by feature for maintainability.
- **Debugging**: Enable TanStack Query DevTools and Redux DevTools for easier debugging.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the tutorial.

## License
This project is licensed under the MIT License.
