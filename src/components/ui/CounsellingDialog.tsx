"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCounsellingDialog } from '@/components/providers/CounsellingDialogProvider';

export function CounsellingDialog() {
    const { isOpen, closeDialog } = useCounsellingDialog();
    const [formData, setFormData] = useState({ fullName: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/counselling', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phone: formData.phone,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setIsSuccess(true);
            setTimeout(() => {
                closeDialog();
                setIsSuccess(false);
                setFormData({ fullName: '', phone: '' });
            }, 2000);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (!isSubmitting) {
            closeDialog();
            setFormData({ fullName: '', phone: '' });
            setError('');
            setIsSuccess(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur - animates in/out */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
                        onClick={handleClose}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                                disabled={isSubmitting}
                            >
                                <X className="h-4 w-4" />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-6"
                                    >
                                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                                        <p className="text-zinc-400">We'll contact you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <>
                                        {/* Title */}
                                        <div className="mb-6">
                                            <h2 className="text-2xl font-bold text-white">Book Free Counselling</h2>
                                            <p className="text-zinc-400 mt-1">Get expert guidance for your admission</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            {/* Full Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-zinc-300">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Enter your full name"
                                                        value={formData.fullName}
                                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 placeholder:text-xs focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804] outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-zinc-300">Phone Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="tel"
                                                        required
                                                        placeholder="Enter your phone number"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full h-12 pl-10 pr-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 placeholder:text-xs focus:border-[#f6c804] focus:ring-1 focus:ring-[#f6c804] outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {error && (
                                                <p className="text-red-400 text-sm">{error}</p>
                                            )}

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-12 bg-[#f6c804] hover:bg-[#e5b703] text-black font-bold rounded-lg transition-all"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Get Free Counselling'
                                                )}
                                            </Button>

                                            <p className="text-xs text-center text-zinc-500">
                                                By submitting, you agree to be contacted by our counselors.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
