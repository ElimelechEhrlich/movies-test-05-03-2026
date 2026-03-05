import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(key, initialValue){
    localStorage.getItem(key)
    localStorage.getItem({movie: initialValue})
}