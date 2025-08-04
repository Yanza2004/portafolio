import { createContext, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const MainContext = createContext();

export function ContextMainProvider(props) {
  const [] = useState();
  return (
    <MainContext.Provider value={{}}>{props.children}</MainContext.Provider>
  );
}
