import React from "react";
import { useState } from "react";

function hooks() {
  const [Open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return { Open, onOpen, onClose };
}

export default hooks;
