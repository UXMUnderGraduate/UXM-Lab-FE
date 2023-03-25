import React from 'react';

export default function SkeletonElement() {
  return (
    <div class="border border-gray-300 shadow rounded-md p-5 max-w-sm w-full mx-auto my-3">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full h-10 w-10 bg-slate-300"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-400 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-300 rounded col-span-2"></div>
              <div class="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
