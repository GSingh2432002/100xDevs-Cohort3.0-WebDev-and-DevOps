import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotificationSelector } from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Wrapper />
      </div>
    </RecoilRoot>
  );
}

function Wrapper() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  
  // Method 1: Do the sum of all the atoms
    // const totalAtoms = networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;

  // Method 2: Using a useMemo hook; It is slightly more optimal than Method 1 because the return value is memoized or being guarded and only recalculated when the dependencies change.
    // const totalAtoms = useMemo(() => {
    //   return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    // }, [networkNotificationCount, jobsAtomCount, notificationAtomCount, messagingAtomCount]);

  // Method 3: Using a selector
    const totalNotificationCount = useRecoilValue(totalNotificationSelector); // This is the selector that we created in atoms.js

  return (
    <div>
      <button>Home</button>

      <button>
        {/* Nothing to do with () brackets it is just for aestheticsness */}
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs (
        {jobsAtomCount}
      )</button>
      <button>Notification (
        {notificationAtomCount}
      )</button>
      <button>Messaging (
        {messagingAtomCount}
      )</button> 
      <button>Me {totalNotificationCount}</button>
      {/* <button>Me {totalAtoms}</button> */}
      {/* <button>Me {totalAtoms}</button> */}
    </div>
  );
}

export default App;
