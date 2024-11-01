import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function getInitials(name: string): string {
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}


export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
