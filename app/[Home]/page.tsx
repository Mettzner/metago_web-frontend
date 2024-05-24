"use client";

import { canSSRAuth } from "../utils/canSSRAuth";
import { setUpAPIClient } from "../services/api";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../_components/ui/sheet";
import Header from "../_components/header";

const DashBoard = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center h-screen">
        <h1 className="font-semibold">DASHBOARD</h1>
      </div>
    </>
  );
};

export default DashBoard;
