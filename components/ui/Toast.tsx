'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

let toastCounter = 0;
const listeners: Array<(toast: Toast) => void> = [];

export const toast = {
  success: (message: string) => addToast(message, 'success'),
  error: (message: string) => addToast(message, 'error'),
  info: (message: string) => addToast(message, 'info'),
};

function addToast(message: string, type: ToastType) {
  const toast: Toast = {
    id: String(toastCounter++),
    message,
    type,
  };
  listeners.forEach((listener) => listener(toast));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 5000);
    };

    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ⓘ',
  };

  const colors = {
    success: 'from-green-600 to-emerald-600',
    error: 'from-red-600 to-pink-600',
    info: 'from-blue-600 to-purple-600',
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm animate-slide-in',
            'bg-gradient-to-r',
            colors[toast.type],
            'text-white font-medium flex items-center gap-2'
          )}
        >
          <span className="text-lg">{icons[toast.type]}</span>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
