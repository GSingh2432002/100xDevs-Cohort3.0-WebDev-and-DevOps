import { atomFamily } from 'recoil'; // Importing atomFamily from Recoil for creating atom-based state management
import { TODOS } from "./todos"; // Importing the TODOS array containing the list of todos

// Create a todosAtomFamily to handle state for each todo by id
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily', // Unique key to identify the atomFamily
    default: (id) => {
        // Find the todo by its id from the TODOS array
        const todo = TODOS.find((x) => x.id === id);
        
        // If the todo is found, return it. If not, return a fallback todo with default title and description
        return todo || { title: "Unknown Task", description: "No description available." };
    },
});
