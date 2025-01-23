"use client";
import { TextInput } from "@repo/ui/textInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <TextInput
        size="small"
        placeholder="Enter Room Name"
      ></TextInput>
      <button
        onClick={() => {
          router.push("/chat/123");
        }}
      >
        Join Room
      </button>
    </div>
  );
}
