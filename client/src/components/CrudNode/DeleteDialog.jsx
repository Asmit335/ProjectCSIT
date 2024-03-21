import React, { useState } from "react";

const DeleteDialog = ({ name, isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Delete Confirmation</h2>
          <p className="mb-4">Are you sure you want to delete {name}?</p>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 mr-4 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
