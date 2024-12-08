import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { networkAtom, jobsAtom, notificationAtom, messagingAtom } from "./atoms";

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
      <ButtonUpdater />
    </div>
  );
}

function ButtonUpdater() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <button onClick={() => {
    setMessagingAtomCount(c => c + 1);
  }}>Me</button>
}

export default App;
