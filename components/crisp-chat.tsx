"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8e6a7f53-89da-4555-8b02-07a37615153e");
  }, []);

  return null;
};