import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Disclaimer</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              The value of investments can go down as well as up, and you may receive back less than your original investment. Past performance or yields quoted should not be considered indicative of future returns. Tax regulations and relief are subject to individual circumstances and change. While we provide tax planning, we do not offer tax advice and will refer you to tax specialists when needed.
            </p>
            <p>
              Please note that Sterling Wealth Associates Limited (Company Number: 10920228) is not authorized and regulated by the Financial Conduct Authority.
            </p>
            <p>
              Registered in England and Wales.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DisclaimerModal;