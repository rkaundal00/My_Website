"use client";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl text-center text-sm text-neutral-500 dark:text-neutral-500">
        &copy; {new Date().getFullYear()} Rahul Kaundal. All rights reserved.
      </div>
    </footer>
  );
}
