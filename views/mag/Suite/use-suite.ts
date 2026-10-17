import { useState } from "react";

export function useSuite() {
  const [activeTab, setActiveTab] = useState(0);

  return { activeTab, setActiveTab };
}
