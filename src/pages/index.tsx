import BcdHeader from "@/components/BcdHeader/BcdHeader";
import ItemCanvas from "@/components/ItemCanvas/ItemCanvas";
import Sidebar from "@/components/Sidebar/Sidebar";
import ItemContext from "@/contexts/ItemContext";
import React, {useContext} from "react";

export default function Home() {
  const {setActiveItem} = useContext(ItemContext);

  const handleClick = () => {
    setActiveItem(null);
  }

  return (
    <div className="window" onClick={handleClick}>
      <BcdHeader />
      <div className="hero_section">
        <Sidebar />
        <ItemCanvas />
      </div>
      
    </div>
  )
}
