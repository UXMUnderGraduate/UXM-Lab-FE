import React from 'react';

export default function SkeletonElement() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-5 max-w-sm w-full mx-auto my-3">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full h-10 w-10 bg-slate-300"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
