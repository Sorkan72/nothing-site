"use client";

import { useEffect, useState } from "react";
import { SlVolumeOff, SlVolume2 } from "react-icons/sl";

interface VolumeSwitchProps {
  iconSize?: number;
}

// Clean up these useEffects. Make hooks.
export default function VolumeSwitch({ iconSize }: VolumeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const storedMuteState = localStorage.getItem("isMuted");
    if (storedMuteState) {
      setIsMuted(JSON.parse(storedMuteState));
    }
    setMounted(true);
  }, []);

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem("isMuted", JSON.stringify(newMuteState));
  };

  if (!mounted) return null;

  return (
    <>
      {isMuted ? (
        <SlVolumeOff
          className="text-[var(--text)]"
          onClick={toggleMute}
          size={iconSize ? iconSize : 28}
        />
      ) : (
        <SlVolume2
          className="text-[var(--text)]"
          onClick={toggleMute}
          size={iconSize ? iconSize : 28}
        />
      )}
    </>
  );
}
