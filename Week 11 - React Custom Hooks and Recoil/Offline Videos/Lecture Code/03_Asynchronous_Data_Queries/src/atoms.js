// Import atom and selector functions from the recoil package
import { atom, selector } from "recoil";

// Import axios package to make HTTP requests to the server
import axios from "axios";

// Create an atom called notifications
export const notifications = atom({
    // Unique key for the atom notifications
    key: "networkAtom",

    // Define the default value of the atom using a selector function
    default: selector({
        // Unique key for the selector function
        key: "networkAtomSelector",

        // Define the get function to fetch the notifications data from the server
        get: async () => {
            try {
                // Make a GET request to the server to fetch the notifications data
                const response = await axios.get("https://sum-server.100xdevs.com/notifications");
                
                // Return the response data directly
                return response.data;
            } catch (error) {
                console.error("Error fetching notifications:", error);
                return { network: 0, jobs: 0, messaging: 0, notifications: 0 }; // Provide a fallback value
            }
        },
    }),
});

// Create a selector called totalNotificationSelector to calculate the total number of notifications and export it
export const totalNotificationSelector = selector({
    // Unique key for the selector totalNotificationSelector
    key: "totalNotificationSelector",

    // Define the get function to calculate the total number of notifications
    get: ({ get }) => {
        try {
            // Get the current value of the notifications atom
            const allNotifications = get(notifications);

            // Calculate and return the total number of notifications
            return (
                allNotifications.network +
                allNotifications.jobs +
                allNotifications.notifications +
                allNotifications.messaging
            );
        } catch (error) {
            console.error("Error calculating total notifications:", error);
            return 0; // Provide a fallback value
        }
    },
});
